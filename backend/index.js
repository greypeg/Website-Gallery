const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
let PierreSiteModel = require("./model");
const router = express.Router();

app.use(cors());
app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

mongoose.connect("mongodb://localhost:27017/PierreSite", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("Connection with mongoDB succesful");
})

// GET routes
router.route("/Search").get((req,res) => {
    let searchParam = req.query.searchParam;

    if(searchParam.length === 0)
    {
        const folder_regex = new RegExp("Product", 'i');
        const recyclable_bag = new RegExp("SpaceBag", 'i');
        PierreSiteModel.find({$or: [
            {ProductFolder: {$regex: folder_regex}},
            {ProductName: {$regex: recyclable_bag}}
            ]}
            ,(err, result) => {
            if(err) res.send(err);
            else res.send(result);
        })
        return;
    }

    if(isNaN(searchParam))
    {
        const name_regex = new RegExp(searchParam, 'i');
        const folder_regex = new RegExp("Product", 'i');
        let NameWorked = false;

        PierreSiteModel.find({ProductName: {$regex: name_regex}, ProductFolder: {$regex: folder_regex}}, (err, result) => {
            if(err) res.send(err);
            else if(result.length !== 0) res.send(result);
            else 
            {
                PierreSiteModel.find({tags: req.query.searchParam, ProductFolder: {$regex: folder_regex}}, (err, result) => {
                    if(err) res.send(err);
                    else res.send(result);
                });
            }
        });
    }else
    {
        PierreSiteModel.find({ProductCode: searchParam}, (err, result) => {
            if(err) res.send(err);
            else res.send(result);
        })
    }
});

router.route("/getProducts").get((req, res) => {
    const regex = new RegExp("Product", 'i');
    PierreSiteModel.find({ProductFolder: {$regex: regex}}, function(err, result) {
        if (err) res.send(err)
        else res.send(result);
    })
})

router.route("/getProduct").get(function(req,res) {
    if(!Object.keys(req.query).length) return res.send({error: "No query params sent"});
    if(!req.query.ProductCode) return res.send({error: "No Product Code sent"});

    console.log("Request arrived to acquire data for product with code: " + req.query.ProductCode);

    PierreSiteModel.find({ProductCode: req.query.ProductCode}, function(err, result) {
        if(err) {
            res.send(err);
        }else
        {
            res.send(result);
        }
    });
});

router.route("/getCarouselImages").get((req, res) => {
    const regex = new RegExp("CarouselImage", 'i');
    PierreSiteModel.find({ProductName: {$regex: regex}}, (err, result) => {
        if(err) res.send(err);
        else res.send(result);
    })
})

// POST routes
router.route("/insertProduct").post(function(req,res) {
    console.log("request to post data came: " + req.query.ProductCode);
    let date = new Date(Date.now());
    let closeRequest = false;

    PierreSiteModel.find({ProductCode: req.query.ProductCode}, (err,result) => {
        if(result.length === 0){

            PierreSiteModel.create(
                {
                    ProductName: req.query.ProductName,
                    ProductShortDescription: req.query.ProductShortDescription,
                    ProductDescription: req.query.ProductDescription,
                    size: {w: req.query.sizeW, h: req.query.sizeH, t: req.query.sizeT, uom: req.query.uom},
                    ProductCode: req.query.ProductCode,
                    ProductFolder: req.query.ProductFolder,
                    carouselimageSources: [],
                    imgsrc: req.query.imgsrc,
                    carouselimageAlts: [],
                    ProductColors: [],
                    ProductColorCodes: [],
                    newProduct: true,
                    DateUpdated: {
                        Date: "" + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear(),
                        Time: "" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
                    }
                },
                function(err, result) {
                    if(err) res.send(err);
                    res.send(result);
                }
            )
        }else if(req.query.overwrite && req.query.overwrite.match("true")) {
            PierreSiteModel.updateOne(
                {   ProductCode: req.query.ProductCode}, 
                {   ProductName: req.query.ProductName,
                    ProductShortDescription: req.query.ProductShortDescription,
                    ProductFolder: req.query.ProductFolder,
                    ProductDescription: req.query.ProductDescription,
                    size: {w: req.query.sizeW, h: req.query.sizeH, uom: req.query.uom},
                    DateUpdated: {
                        Date: "" + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear(),
                        Time: "" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
                    },
                }, (err, result) => {
                    if(err) res.send(err);
                    else res.send(result);
                }
                )
        }
        else
        {
            res.send("Item already found and query parameter \"overwrite\" is not set to true. Database not updated");
        }
    })

    
})

router.route("/updateProductImages").post(function(req, res) {
    

    if(!req.query.ProductCode) return res.send("No product code given");
    console.log("request to update data came: " + req.query.ProductCode);
    if(!Object.keys(req.query).length) return res.send("No image sources given");



    let keys = Object.keys(req.query);
    let _imageAlts = [];
    let _imageSrces = [];
    let date = new Date(Date.now());

    for(let i = 0; i<keys.length; ++i)
    {
        if(keys[i].match("ProductCode")) continue;
        if(keys[i].match("overwrite")) continue;

        if(keys[i].length < "imgSourceX".length)
        {
            _imageAlts.push(Object.values(req.query)[i]);
            continue;
        }
        _imageSrces.push(Object.values(req.query)[i]);
    }

    PierreSiteModel.find({ProductCode: req.query.ProductCode}, (err,result) => {
        if(result[0].carouselimageSources.length === 0 || (req.query.overwrite && req.query.overwrite.match("true"))) {
            PierreSiteModel.updateOne(
                {ProductCode: req.query.ProductCode},
                {carouselimageSources: _imageSrces,
                imgsrc: _imageSrces[0],
                carouselimageAlts: _imageAlts,
                DateUpdated: {
                    Date: "" + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear(),
                    Time: "" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
                }
                }
            , (err, result) => {
                if(err) res.send(err);
                else    res.send(result);
            });
        }else{
            res.send("Product already has images and overwrite is set to false");
        }
    })
})

router.route("/updateProductColors").post(function(req, res) {
    

    if(!req.query.ProductCode) return res.send("No product code given");
    console.log("request to update data came: " + req.query.ProductCode);

    if(!Object.keys(req.query).length) return res.send("No colors given");
    
    let keys = Object.keys(req.query);
    let _colorCodes = [];
    let _colors = [];
    let date = new Date(Date.now());

    for(let i = 0; i<keys.length; ++i)
    {
        if(keys[i].match("ProductCode")) continue;
        if(keys[i].match("overwrite")) continue;

        if(keys[i].length < "colorCodeX".length)
        {
            _colors.push(Object.values(req.query)[i]);
            continue;
        }
        _colorCodes.push(Object.values(req.query)[i]);
    }

    PierreSiteModel.find({ProductCode: req.query.ProductCode}, (err,result) => {
        if(result[0].ProductColors.length === 0 || (req.query.overwrite && req.query.overwrite.match("true"))) {
            PierreSiteModel.updateOne(
                {ProductCode: req.query.ProductCode},
                {ProductColors: _colors,
                DateUpdated: {
                    Date: "" + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear(),
                    Time: "" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
                },
                ProductColorCodes: _colorCodes,
                }
            , (err, result) => {
                if(err) res.send(err);
                else    res.send(result);
            });
        }
        else{
            res.send("Product already has colors and their codes, and overwrite is set to false.");
        }
    });
});

router.route("/updateProductTags").post((req, res) => {

    if(!req.query.ProductCode) return res.send("No product code given");
    console.log("request to update data came: " + req.query.ProductCode);

    if(!Object.keys(req.query).length) return res.send("No colors given");

    let tag_keys = Object.keys(req.query);
    let tag_values = [];

    for(let i=0; i < tag_keys.length; ++i)
    {
        if(tag_keys[i].match("ProductCode")) continue;
        if(tag_keys[i].match("overwrite")) continue;

        tag_values.push(Object.values(req.query)[i]);
    }

    console.log(tag_values);
    PierreSiteModel.find({ProductCode: req.query.ProductCode}, (err,result) => {
        if(result[0].tags.length === 0 || (req.query.overwrite && req.query.overwrite.match("true"))) {
            PierreSiteModel.updateOne(
                {ProductCode: req.query.ProductCode},
                {tags: tag_values,},
                (err, result) => {
                    if(err) return res.send(err);
                    res.send(result);
            })
        }
        else
        {
            res.send("Product already has tags and overwrite is set to false.");
        }
    });
})
    // Product.save((err, Product) =>{
    //     if(err) return console.log("oof " + err);
    //     console.log("saved Product: " + Product);
    // });

module.exports = app;