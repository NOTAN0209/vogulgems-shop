import React from "react";
import './mosaic.css';
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";

function Mosaic(){
     return(
        <div className="mosaic">
            <Navigation />
            <a href="#" class="productLink">
            <div class="product">
              <img src="./img/mosaic/mos.jpg"  alt="Каменная мозаика" class="productImg" />
              <h4 class="productTitle">Брошь "Женщина"</h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>4000₽</s></span>
                <span class="productPriceNew">3200₽</span>
              </div>
            </div>
          </a>

          <a href="#" class="productLink">
            <div class="product">
              <img src="./img/mosaic/mos1.jpg"  alt="Каменная мозаика" class="productImg" />
              <h4 class="productTitle">Брошь "Попугай"</h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>4000₽</s></span>
                <span class="productPriceNew">3200₽</span>
              </div>
            </div>
          </a>

          <a href="#" class="productLink">
            <div class="product">
              <img src="./img/mosaic/mos2.jpg"  alt="Каменная мозаика" class="productImg" />
              <h4 class="productTitle">Брошь "Синий кит" </h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>4000₽</s></span>
                <span class="productPriceNew">3200₽</span>
              </div>
            </div>
          </a>

          <a href="#" class="productLink">
            <div class="product">
              <img src="./img/mosaic/mos3.jpg"  alt="Каменная мозаика" class="productImg" />
              <h4 class="productTitle">Брошь "Кашалот" </h4>
              <div class="productPrice">
                <span class="productOldPrice"><s>4000₽</s></span>
                <span class="productPriceNew">3200₽</span>
              </div>
            </div>
          </a>
          <Footer/>
        </div>
     )
}
export default Mosaic