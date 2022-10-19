import React from "react";
import  "../Home/Destacado.css";

const Destacado = () => {
    return (
        <div className="destacado text-center">
           <img src="https://http2.mlstatic.com/D_NQ_NP_629590-MLA50126422083_052022-O.webp" alt="Promoción Destacada" className="img-destacada" /> 
           <img src="https://http2.mlstatic.com/D_NQ_NP_2X_730982-MLA50126295539_052022-F.webp" alt="Promoción Destacada" className="img-destacada" /> 
           <img src="https://http2.mlstatic.com/D_NQ_NP_676485-MLA50121080307_052022-O.webp" alt="Promoción Destacada" className="img-destacada" />
           <img src="https://http2.mlstatic.com/D_NQ_NP_645696-MLA50121125059_052022-O.webp" alt="Promoción Destacada" className="img-destacada" />  
        </div>
        
    )
}

export default Destacado;