import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../imagen/logoBuy1.png";
import "../NavBar/NavBar.css"

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-itemLogo">
                <NavLink className="nav-link active " aria-current="page" to={"/"}><img src={logo} width="70"  alt="Buy and Hold" />  </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/"}>Visita Buy & Hold</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/menu"}>Tienda</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/category/:id"}>EnConstruccion </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to={"/item/:id"}>Pedido </NavLink>
            </li>
            
        </ul>
    )
}

export default NavBar;