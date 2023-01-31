import React from "react";
import './products.css';
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";


function PageProduct (){

    return(

    <div class="featured">


      <div class ="container">
      <Navigation />
        <div class="featuredHeader">
          <h2 class="featuredTitle">Наши работы</h2>
          <div class="featuredDesc">
            <p>Украшения из натуральных камней</p>
          </div>
        </div>

        <div class="productsWrapper">

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

        </div>
      </div>

      <div class="productButton">
        <a href="#" class="buttonOutline">Посмотреть все украшения</a>
      </div>
      <Footer />
    </div>

)    
}

export default PageProduct