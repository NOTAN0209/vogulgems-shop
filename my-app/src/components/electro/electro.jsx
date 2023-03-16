import React from "react";
import '../mainPage/product.css';
import electros from "./electro.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";
import { Link } from "react-router-dom";

function Electro(){

    return(
        <div className="products">
            <Navigation/>
            <div className="productsRow">
              {electros.map((electro) => (           
                <div className="product" key = {electro.row}>      
                  <img src={electro.src} alt={electro.alt} className="productImg" />

                  <p className="productTitle">{electro.title} </p>

                  <div className="productLine"></div>

                  <ul className="productCharacteristics">
                   
                    <li className="productMaterial"><strong>Материал</strong>: {electro.material}</li>
                    <li className="productcSize"><strong>Размер</strong>: {electro.size}</li>
                    <li className="productPrice"><strong>Цена</strong>: {electro.price}</li>                 
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