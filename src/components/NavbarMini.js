import React from 'react'
import "./NavbarMini.css"


function NavbarMini() {
    return (
        <div className="NavbarMini container-fluid">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-1">
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="iconify" data-icon="simple-icons:facebook" data-inline="false"></span>
                        </div>
                        <div className="col-sm-2">
                            <span className="iconify" data-icon="akar-icons:instagram-fill" data-inline="false"></span>
                        </div>
                        <div className="col-sm-2">
                            <span className="iconify" data-icon="entypo:email" data-inline="false"></span>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
                <div className="col-sm-5">
                    <div className="row">
                        <span className="iconify" data-icon="entypo:old-phone" data-inline="false"></span>
                        <p>: 2810 123 456 / 6912 345 678</p>
                    </div>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-1 alignmentFix">
                    <p>Γλώσσα</p>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>
    )
}

export default NavbarMini
