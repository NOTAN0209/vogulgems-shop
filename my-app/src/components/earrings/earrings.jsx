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

                  <p className="productTitle">{earring.title} </p>

                  <div className="productLine"></div>

                  <ul className="productCharacteristics">
                   
                    <li className="productMaterial"><strong>Материал</strong>: {earring.material}</li>
                    <li className="productcSize"><strong>Размер</strong>: {earring.size}</li>
                    <li className="productPrice"><strong>Цена</strong>: {earring.price}</li>                 
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