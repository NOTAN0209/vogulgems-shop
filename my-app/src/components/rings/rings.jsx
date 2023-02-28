import React from "react";
import './rings.css';
import rings from "./rings.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";
import { Link } from "react-router-dom";


function Rings(){


    return(
        <div className="rings">
            <Navigation />
            <div className="earringsRow">
                { rings.map(( ring) => (           
                    <div className="product" key = {ring.row}>      
                    <img src={ring.src} alt={ring.alt} className="productImg" />

                    <h4 className="productTitle">{ring.title} </h4>

                    <ul className="productCharacteristics">
                        <div className="productLine"></div>
                        <li className="productMaterial">{ring.material}</li>
                        <li className="productcSize">{ring.size}</li>
                        <li className="productPrice">{ring.price}</li>                 
                    </ul>

                    <Link to="/form" className="productButton"> Заказать </Link>
                    </div>   
                ))} 
              </div>
          <Footer />
        </div>
    )
}

export default Rings