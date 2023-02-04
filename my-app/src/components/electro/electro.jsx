import React from "react";
import './electro.css';
import electros from "./electro.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";

function Electro(){


    return(
        <div className="electroplanting">
            <Navigation/>
            {electros.map((electro) => ( 
            <a href="#" className="productLink" key = {electro.row}>
              <div className="product">      
                <img src={electro.src} alt={electro.alt} className="productImg" />
                <h4 className="productTitle">{electro.title} </h4>
                <div className="productPrice">
                  <span className="productPriceNew">{electro.price}</span>
                </div>
              </div>
            </a>
            ))} 
          <Footer />
        </div>
    )
}
export default Electro