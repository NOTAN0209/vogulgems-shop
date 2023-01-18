import React from "react";
import './header.css';


function header() {

return(
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
           <img src="./img/logo/pend.jpg" alt = "Кулон" class="headerPhotoPendant" />
          </a>
          <a href="">
           <img src="./img/logo/ring.jpg" alt = "Кольцо" class="headerPhotoRing" />
          </a>
          <a href="">
           <img src="./img/logo/set.jpg" alt = "Комплект" class="headerPhotoSet" />
          </a>
          <a href="">
           <img src="./img/logo/man.jpg" alt = "Брошь" class="headerPhotoBroosh" />
          </a>
        </div>
      </div>
)
}

export default header