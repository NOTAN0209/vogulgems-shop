import React from "react";
import './set.css';
import sets from "./set.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";
import { Link } from "react-router-dom";


function Set(){

    return(
    <div className="set">
        <Navigation />
        <div className="setRow">
              { sets.map(( set) => (           
                <div className="product" key = {set.row}>      
                  <img src={set.src} alt={set.alt} className="productImg" />

                  <h4 className="productTitle">{set.title} </h4>

                  <ul className="productCharacteristics">
                    <div className="productLine"></div>
                    <li className="productMaterial">{set.material}</li>
                    <li className="productcSize">{set.size}</li>
                    <li className="productPrice">{set.price}</li>                 
                  </ul>

                 <Link to="/form" className="productButton"> Заказать </Link>
                </div>   
              ))} 
            </div>
        <Footer />
    </div>
)

}

export default Set