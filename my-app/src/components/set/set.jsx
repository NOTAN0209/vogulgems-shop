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

                  <p className="productTitle">{set.title} </p>

                  <div className="productLine"></div>

                  <ul className="productCharacteristics">
                    <li className="productMaterial"><strong>Материал</strong>:{set.material}</li>
                    <li className="productcSize"><strong>Размер</strong>:{set.size}</li>
                    <li className="productPrice"><strong>Цена</strong>:{set.price}</li>                 
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