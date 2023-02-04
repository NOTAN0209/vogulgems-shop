import React from "react";
import './rings.css';
import rings from "./rings.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";


function Rings(){



    return(
        <div className="rings">
            <Navigation />
            {rings.map((ring) => ( 
                <a href="#" class="productLink" key = {ring.row}>
                <div class="product">      
                    <img src={ring.src} alt={ring.alt} class="productImg" />
                    <h4 class="productTitle">{ring.title} </h4>
                    <div class="productPrice">
                    <span class="productPriceNew">{ring.price}</span>
                    </div>
                </div>
                </a>
                ))}
          <Footer />
        </div>
    )
}

export default Rings