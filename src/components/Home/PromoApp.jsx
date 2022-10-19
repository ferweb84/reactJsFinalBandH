import React from "react";
import  "../Home/PromoApp.css";

const PromoApp = () => {
    return (
        <div className="fondo">
            
            <div className="col-md-12 p-5 text-black">
                <h3>--- Descargá la APP --- </h3>
                {/* <p><img src="imagen/google_play.png" alt="Google Play" width="135" /><img src="imagen/app__store.png" alt="App Store" width="135" /></p> */}
                <p>BUY & HOLD y el logotipo de B&H son marcas comerciales de Minotaur Investiments Inc.- registradas en el Mercosur Y otros países. </p>
                <br />App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc.
            </div>
            <div className="col-md-4 offset-md-4  text-center">
                <img src="../imagen/logoBuy1.png" alt="Celular" width="80" />
            </div>
        </div>
    )
}

export default PromoApp;