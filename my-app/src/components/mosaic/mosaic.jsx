import React from "react";
import './mosaic.css';
import mosaics from "./mosaic.js"
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";

function Mosaic(){
     return(
        <div className="mosaic">
            <Navigation />
            {mosaics.map((mosaic) => ( 
            <a href="#" class="productLink" key = {mosaic.row}>
              <div class="product">      
                <img src={mosaic.src} alt={mosaic.alt} class="productImg" />
                <h4 class="productTitle">{mosaic.title} </h4>
                <div class="productPrice">
                  <span class="productPriceNew">{mosaic.price}</span>
                </div>
              </div>
            </a>
            ))} 
          <Footer/>
        </div>
     )
}
export default Mosaic