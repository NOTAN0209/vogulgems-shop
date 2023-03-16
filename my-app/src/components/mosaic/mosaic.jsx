import React from "react";
import '../mainPage/product.css';
import mosaics from "./mosaic.js"
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";
import { Link } from "react-router-dom";

function Mosaic(){
     return(
        <div className="products">
            <Navigation />
            <div className="productsRow">
              { mosaics.map((mosaic) => (           
                <div className="product" key = {mosaic.row}>      
                  <img src={mosaic.src} alt={mosaic.alt} className="productImg" />

                  <p className="productTitle">{mosaic.title} </p>

                  <div className="productLine"></div>

                  <ul className="productCharacteristics">
                   
                    <li className="productMaterial"><strong>Материал</strong>: {mosaic.material}</li>
                    <li className="productcSize"><strong>Размер</strong>: {mosaic.size}</li>
                    <li className="productPrice"> <strong>Цена</strong>:{mosaic.price}</li>                 
                  </ul>

                 <Link to="/form" className="productButton"> Заказать </Link>
                </div>   
              ))} 
            </div>
          <Footer/>
        </div>
     )
}
export default Mosaic