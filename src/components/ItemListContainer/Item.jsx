import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({item}) => {
    return (
        <div className="card fondo_amarillo border-0">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <img src={"imagen/" + item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <h4 className="card-title text-center color_marron"><b>{item.nombre}</b></h4>
                    <h5 className="card-title text-center color_marron"><b>{item.destacado}</b></h5>
                    <h4 className="card-title text-center color_marron"><b>${item.precio}</b></h4>
                </div>
            </Link>
        </div>
    )
}

export default Item;