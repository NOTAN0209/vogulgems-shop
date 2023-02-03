import React from "react";
import './earrings.css';
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";




function Earrings(){

    return(
    <div class="earrings">
        <Navigation />
        <a href="#" class="productLink">
            <div class="product">
                <img src= "./img/earr/earr1.jpg" alt="Серьги двойные" class="productImg" />
                <h4 class="productTitle">Двойные серьги марказит и пурпурит</h4>
                <div class="productPrice">
                    <span class="productOldPrice"><s>3600₽</s></span>
                    <span class="productPriceNew">2800₽</span>
                </div>
            </div>
        </a>

        <a href="#" class="productLink">
        <div class="product">
        <img src="./img/earr/earr2.jpg" alt="Серьги двойные" class="productImg" />
        <h4 class="productTitle">Двойные серьги азурит и чароит</h4>
        <div class="productPrice">
            <span class="productOldPrice"><s>3600₽</s></span>
            <span class="productPriceNew">2800₽</span>
        </div>
        </div>
        </a>

        <a href="#" class="productLink">
        <div class="product">
        <img src="./img/earr/earr3.jpg" alt="Серьги двойные" class="productImg" />
        <h4 class="productTitle">Двойные серьги моховой агат</h4>
        <div class="productPrice">
            <span class="productOldPrice"><s>3000₽</s></span>
            <span class="productPriceNew">2400₽</span>
        </div>
        </div>
        </a>

        <a href="#" class="productLink">
        <div class="product">
        <img src="./img/earr/earr4.jpg" alt="Серьги двойные" class="productImg" />
        <h4 class="productTitle">Двойные серьги азурит и яшма</h4>
        <div class="productPrice">
            <span class="productOldPrice"><s>3000₽</s></span>
            <span class="productPriceNew">2400₽</span>
        </div>
        </div>
        </a>
        <Footer />
    </div>
)

}

export default Earrings