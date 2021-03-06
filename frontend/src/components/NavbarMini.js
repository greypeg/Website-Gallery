import React from 'react'
import "./NavbarMini.css"


function NavbarMini() {
    return (
        <div className="NavbarMini">
            <div className="leftSide">
            <span className="iconify" data-icon="ant-design:facebook-outlined" data-inline="false"></span>
            <span className="iconify" data-icon="akar-icons:instagram-fill" data-inline="false"></span>
            <span className="iconify" data-icon="entypo:email" data-inline="false"></span>
                </div>
                <div className="centerSide">
                <span className="iconify" data-icon="entypo:old-phone" data-inline="false"></span>
                <p>: 2810 123 456 / 6912 345 678</p>
                </div>
           <div className="rightSide"><p>Γλώσσα</p></div>
        </div>
    )
}

export default NavbarMini
