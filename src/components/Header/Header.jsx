import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <div className="container-fluid align-items-center">
            <div className="row ">
                <div className="col-md-6 d-flex">
                    <NavBar />
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default Header;