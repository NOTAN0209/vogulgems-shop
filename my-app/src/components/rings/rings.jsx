import React from "react";
import '../mainPage/product.css';
import rings from "./rings.js";
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";
import { Link } from "react-router-dom";


function Rings(){


    return(
        <div className="products">
            <Navigation />
            <div className="productsRow">
                { rings.map(( ring) => (           
                    <div className="product" key = {ring.row}>      
                    <img src={ring.src} alt={ring.alt} className="productImg" />

                    <p className="productTitle">{ring.title} </p>
                    <div className="productLine"></div>

                    <ul className="productCharacteristics">
                        <li className="productMaterial"><strong>Материал</strong>: {ring.material}</li>
                        <li className="productcSize"><strong>Размер</strong>: {ring.size}</li>
                        <li className="productPrice"><strong>Цена</strong>: {ring.price}</li>                 
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