const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PierreProduct = new Schema({
    ProductName: String,
    ProductShortDescription: String,
    ProductFolder: String,
    carouselimageSources: [String],
    carouselimageAlts: [String],
    imgsrc: String,
    ProductDescription: String,
    size: {
        h: Number,
        w: Number,
        t: Number,
        uom: String
    },
    tags: [String],
    ProductColors: [String],
    ProductColorCodes: [String],
    ProductCode: Number,
    newProduct: Boolean,
    DateUpdated: {
        Date: String,
        Time: String,
    },
}, { collection: "Inventory"})

module.exports = mongoose.model("PierreProduct", PierreProduct);
