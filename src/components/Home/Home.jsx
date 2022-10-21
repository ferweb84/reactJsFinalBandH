import React from "react";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import PromoApp from "./PromoApp";
import  "../Home/Home.css";
import CarouselHome from "./Carousel";

const Home = () => {
    return (
        <div className="Home">
            
            <Destacado />
            <CarouselHome/>
            <Cupones />
            <PromoApp />
            
        </div>
    )
}

export default Home;