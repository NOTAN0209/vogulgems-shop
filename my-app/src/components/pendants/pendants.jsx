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

                  <h4 className="productTitle">{pendant.title} </h4>

                  <ul className="productCharacteristics">
                    <div className="productLine"></div>
                    <li className="productMaterial">{pendant.material}</li>
                    <li className="productcSize">{pendant.size}</li>
                    <li className="productPrice">{pendant.price}</li>                 
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