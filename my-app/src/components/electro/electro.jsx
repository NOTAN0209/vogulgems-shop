import React from "react";
import './electro.css';
import electros from "./electro.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";
import { Link } from "react-router-dom";

function Electro(){

    return(
        <div className="electroplanting">
            <Navigation/>
            <div className="electroplantingRow">
              {electros.map((electro) => (           
                <div className="product" key = {electro.row}>      
                  <img src={electro.src} alt={electro.alt} className="productImg" />

                  <h4 className="productTitle">{electro.title} </h4>

                  <ul className="productCharacteristics">
                    <div className="productLine"></div>
                    <li className="productMaterial">{electro.material}</li>
                    <li className="productcSize">{electro.size}</li>
                    <li className="productPrice">{electro.price}</li>                 
                  </ul>

                 <Link to="/form" className="productButton"> Заказать </Link>
                </div>   
              ))} 
            </div>
          <Footer />
        </div>
    )
}
export default Electro