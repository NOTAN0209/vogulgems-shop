import React from "react";
import './electro.css';
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";

function Electro(){


    return(
        <div className="electroplanting">
            <Navigation/>
            <a href="#" class="productLink">
            <div class="product">
              <img src="./img/broch/br.jpg"  alt="Медная брошь" class="productImg" />
              <h4 class="productTitle">Медный кулон жук Скарабей(дымчатый кварц) </h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>3000₽</s></span>
                <span class="productPriceNew">2400₽</span>
              </div>
            </div>
          </a>

          <a href="#" class="productLink">
            <div class="product">
              <img src="./img/broch/br1.jpg"  alt="Медная брошь" class="productImg" />
              <h4 class="productTitle">Медная брошь жук Скарабей(яшма)</h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>3000₽</s></span>
                <span class="productPriceNew">2400₽</span>
              </div>
            </div>
          </a>

          <a href="#" class="productLink">
            <div class="product">
              <img src="./img/broch/br2.jpg"  alt="Медная брошь" class="productImg" />
              <h4 class="productTitle">Медная брошь Крокодил(уваровит)</h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>3000₽</s></span>
                <span class="productPriceNew">2400₽</span>
              </div>
            </div>
          </a>

          <a href="#" class="productLink">
            <div class="product">
              <img src="./img/broch/br3.jpg"  alt="Медная брошь" class="productImg" />
              <h4 class="productTitle">Медная брошь жук Олень(петерситом)</h4>
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
export default Electro