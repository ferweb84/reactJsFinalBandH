import React from "react";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import PromoApp from "./PromoApp";
import  "../Home/Home.css";

const Home = () => {
    return (
        <div className="Home">
            
            <Destacado />
            <Cupones />
            <PromoApp />
            
        </div>
    )
}

export default Home;