import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../../Context/Context";
import carrito from "../imagen/basket.svg";
import cesto from "../imagen/trash3.svg";
import './CartWidget.css'

const CartWidget = () => {
    const {cartTotal,clear} = useContext(CartContext);

    return (
        <div>
            <Link to={"/cart"}>
            <button type="button" className="btn fondo_blanco position-relative me-2" title="Vaciar Carrito" onClick={()=> {clear()}}>
                <img src={cesto} alt="Cesto" />
            </button>
                <button type="button" className="btn fondo_naranja position-relative" title="Ir al Carrito">
                    <img src={carrito} alt="Carrito" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal() > 0 ? cartTotal() : ""}</span>
                </button>
                <span>{cartTotal() || ''}</span>
            </Link>
        </div>
    )
}

export default CartWidget;