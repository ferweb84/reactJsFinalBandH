import React from "react";
import  "../Home/Cupones.css";

const Cupones = () => {
    return (
        <div className="cupones my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_718870-MLA50126106809_052022-O.webp" alt="Cupon1" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_834130-MLA50126374351_052022-O.webp" alt="Cupon2" className="img-fluid rounded" />
                </div>
                <div className="col-md-4">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_722047-MLA50126390340_052022-O.webp" alt="Cupon3" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    )
}

export default Cupones;