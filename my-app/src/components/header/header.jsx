import React from "react";
import './header.css';
import { Link } from "react-router-dom";


function header() {

return(
  <header class="header">
    <div class="container">
      <div class="headerRow">
        <div class="headerContent">
          <h1 class="headerTitle">VogulGems</h1>
          <div class="headerText">
            <p>Творческая мастерская ювелира и камнереза!<br />Создаём уникальные украшения ручной работы с натуральными камнями</p>
          </div>

          <div class="headerBtn">
            <a href="#" class="button">Подробнее</a>
          </div>
        </div>

        <div class="headerPhoto">
          <a href="">
            <Link to="/pendants"> 
              <a href="#" className = "navLink"><img src="../img/logo/pend.jpg" alt = "Кулон" class="headerPhotoPendant" /></a>
            </Link>  
          </a>
          <a href="">
            <Link to="/rings"> 
              <img src="./img/logo/ring.jpg" alt = "Кольцо" class="headerPhotoRing" />
            </Link> 
          </a>
          <a href="">
            <Link to="/electro"> 
              <img src="./img/broch/br1.jpg" alt = "Комплект" class="headerPhotoSet" />
            </Link> 
          </a>
          <a href="/mosaic">
          <Link to="/electro"> 
            <img src="./img/logo/man.jpg" alt = "Брошь" class="headerPhotoBroosh" />
          </Link> 
          </a>
        </div>
      </div>
    </div>
</header>
)
}

export default header