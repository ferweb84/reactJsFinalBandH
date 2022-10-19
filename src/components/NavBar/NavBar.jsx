import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../imagen/logoBuy1.png";
import "../NavBar/NavBar.css"

const NavBar = () => {
    return (
        <ul className="nav d-flex align-items-center">
            <li className="nav-itemLogo">
                <NavLink className="nav-link active " aria-current="page" to={"/"}><img src={logo} width="70"  alt="Buy and Hold" />  </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/menu"}>Visita Buy & Hold</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/category/:id"}>Contactanos </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/item/:id"}>Tienda </NavLink>
            </li>
             <NavLink className="nav__link" to="cart">
                
             </NavLink>
        </ul>
    )
}

export default NavBar;