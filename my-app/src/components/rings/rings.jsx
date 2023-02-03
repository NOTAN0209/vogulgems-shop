import React from "react";
import './rings.css';
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";


function Rings(){



    return(
        <div className="rings">
            <Navigation />
             <a href="#" class="productLink">
            <div class="product">
              <img src="./img/rings/ring.jpg" alt="Двойное кольцо" class="productImg" />
              <h4 class="productTitle">Двойное кольцо пирит и малахит</h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>2600₽</s></span>
                <span class="productPriceNew">2000₽</span>
              </div>
            </div>
          </a>

          <a href="#" class="productLink">
            <div class="product">
              <img src="./img/rings/ring1.jpg" alt="Двойное кольцо" class="productImg" />
              <h4 class="productTitle">Двойное кольцо азурит и горный хрусталь</h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>3000₽</s></span>
                <span class="productPriceNew">2600₽</span>
              </div>
            </div>
          </a>

          <a href="#" class="productLink">
            <div class="product">
              <img src="./img/rings/ring2.jpg" alt="Двойное кольцо" class="productImg" />
              <h4 class="productTitle">Двойное кольцо азурит и агат</h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>3000₽</s></span>
                <span class="productPriceNew">2400₽</span>
              </div>
            </div>
          </a>

          <a href="#" class="productLink">
            <div class="product">
              <img src="./img/rings/ring3.jpg"  alt="Двойное кольцо" class="productImg" />
              <h4 class="productTitle">Двойное кольцо хризопраз и родонит</h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>2600₽</s></span>
                <span class="productPriceNew">2000₽</span>
              </div>
            </div>
          </a>
          <Footer />
        </div>
    )
}

export default Rings