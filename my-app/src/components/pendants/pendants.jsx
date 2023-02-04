import React from "react";
import './pendants.css';
import pendants from "./pendants.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";



function Pendants(){


 return(
    <div className="pendants">
        <Navigation />
            {pendants.map((pendant) => ( 
                <a href="#" className="productLink" key = {pendant.row}>
                <div className="product">      
                    <img src={pendant.src} alt={pendant.alt} className="productImg" />
                    <h4 className="productTitle">{pendant.title} </h4>
                    <div className="productPrice">
                    <span className="productPriceNew">{pendant.price}</span>
                    </div>
                </div>
                </a>
                ))} 
        <Footer />
</div>
)
}

export default Pendants