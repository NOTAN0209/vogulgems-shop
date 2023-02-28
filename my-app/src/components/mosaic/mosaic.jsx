import React from "react";
import './mosaic.css';
import mosaics from "./mosaic.js"
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";
import { Link } from "react-router-dom";

function Mosaic(){
     return(
        <div className="mosaic">
            <Navigation />
            <div className="mosaicRow">
              { mosaics.map((mosaic) => (           
                <div className="product" key = {mosaic.row}>      
                  <img src={mosaic.src} alt={mosaic.alt} className="productImg" />

                  <h4 className="productTitle">{mosaic.title} </h4>

                  <ul className="productCharacteristics">
                    <div className="productLine"></div>
                    <li className="productMaterial">{mosaic.material}</li>
                    <li className="productcSize">{mosaic.size}</li>
                    <li className="productPrice">{mosaic.price}</li>                 
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