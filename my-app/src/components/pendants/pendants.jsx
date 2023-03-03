import React from "react";
import './pendants.css';
import pendants from "./pendants.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";
import { Link } from "react-router-dom";



function Pendants(){


 return(
    <div className="pendants">
        <Navigation />
        <div className="pendantsRow">
              {pendants.map(( pendant) => (           
                <div className="product" key = {pendant.row}>      
                  <img src={pendant.src} alt={pendant.alt} className="productImg" />

                  <p className="productTitle">{pendant.title} </p>

                  <div className="productLine"></div>

                  <ul className="productCharacteristics">                 
                    <li className="productMaterial"><strong>Материал</strong>: {pendant.material}</li>
                    <li className="productcSize"><strong>Размер</strong>: {pendant.size}</li>
                    <li className="productPrice"> <strong>Цена</strong>:{pendant.price}</li>                 
                  </ul>

                 <Link to="/form" className="productButton"> Заказать </Link>
                </div>   
              ))} 
            </div>
        <Footer />
    </div>
)
}

export default Pendants