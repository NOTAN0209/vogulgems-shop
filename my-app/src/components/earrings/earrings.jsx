import React from "react";
import './earrings.css';
import earrings from "./earrings.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";


function Earrings(){

    return(
    <div className="earrings">
        <Navigation />
            {earrings.map((earring) => (
                <a href="#" className="productLink" key = {earring.row}>
                    <div className="product">
                        <img src={earring.src} alt={earring.alt} className="productImg" />
                        <h4 className="productTitle">{earring.alt}</h4>
                        <div className="productPrice">
                            <span className="productPriceNew">{earring.price}</span>
                        </div>
                    </div>
                </a>
            ))}      
        <Footer />
    </div>
)

}

export default Earrings