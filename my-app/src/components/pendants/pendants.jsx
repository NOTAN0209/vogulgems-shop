import React from "react";
import './pendants.css'
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";



function Pendants(){


 return(
    <div className="pendants">
        <Navigation />
        <a href="#" class="productLink">
        <div class="product">
        <img src="./img/pend/pend1.jpg"  alt="Медный кулон" class="productImg" />
        <h4 class="productTitle">Медный кулон "Птица"</h4>
        <div class="productPrice">
            <span class="productOldPrice"><s>6000₽</s></span>
            <span class="productPriceNew">4800₽</span>
        </div>
        </div>
        </a>

        <a href="#" class="productLink">
        <div class="product">
        <img src="./img/pend/pend2.jpg"  alt="Медный кулон" class="productImg" />
        <h4 class="productTitle">Медный кулон "Космос"</h4>
        <div class="productPrice">
            <span class="productOldPrice"><s>4500₽</s></span>
            <span class="productPriceNew">3600₽</span>
        </div>
        </div>
        </a>

        <a href="#" class="productLink">
        <div class="product">
        <img src="./img/pend/pend3.jpg"  alt="Медный кулон" class="productImg" />
        <h4 class="productTitle">Медный кулон "Противостояние"</h4>
        <div class="productPrice">
            <span class="productOldPrice"><s>3600₽</s></span>
            <span class="productPriceNew">2900₽</span>
        </div>
        </div>
        </a>

        <a href="#" class="productLink">
        <div class="product">
        <img src="./img/pend/pend4.jpg"  alt="Медный кулон" class="productImg" />
        <h4 class="productTitle">Медный кулон "Агаты"</h4>
        <div class="productPrice">
            <span class="productOldPrice"><s>4000₽</s></span>
            <span class="productPriceNew">3200₽</span>
        </div>
        </div>
        </a>
        <Footer />
</div>
)
}

export default Pendants