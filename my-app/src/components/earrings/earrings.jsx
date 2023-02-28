import React from "react";
import './earrings.css';
import earrings from "./earrings.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";
import { Link } from "react-router-dom";


function Earrings(){

    return(
    <div className="earrings">
        <Navigation />
        <div className="earringsRow">
              { earrings.map(( earring) => (           
                <div className="product" key = {earring.row}>      
                  <img src={earring.src} alt={earring.alt} className="productImg" />

                  <h4 className="productTitle">{earring.title} </h4>

                  <ul className="productCharacteristics">
                    <div className="productLine"></div>
                    <li className="productMaterial">{earring.material}</li>
                    <li className="productcSize">{earring.size}</li>
                    <li className="productPrice">{earring.price}</li>                 
                  </ul>

                 <Link to="/form" className="productButton"> Заказать </Link>
                </div>   
              ))} 
            </div>
        <Footer />
    </div>
)

}

export default Earrings