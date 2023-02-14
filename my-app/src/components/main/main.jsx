import React from "react";
import './main.css';
import { Link } from "react-router-dom";


function Main() {

return(
  <main className="main">
   
      <div className="mainRow">
        <div className="mainContent">
          <h1 className="mainTitle">VogulGems</h1>
          <div className="mainText">
            <p>Творческая мастерская ювелира и камнереза!<br />Создаём уникальные украшения ручной работы с натуральными камнями</p>
          </div>

          <div className="mainBtn">
            <a href="#" className="button">Подробнее</a>
          </div>
        </div>

        <div className="mainPhoto">
          <a href="">
            <Link to="/pendants"> 
              <a href="#" classNameName = "navLink"><img src="../img/logo/pend.jpg" alt = "Кулон" className="mainPhotoPendant" /></a>
            </Link>  
          </a>
          <a href="">
            <Link to="/rings"> 
              <img src="./img/logo/ring.jpg" alt = "Кольцо" className="mainPhotoRing" />
            </Link> 
          </a>
          <a href="">
            <Link to="/electro"> 
              <img src="./img/broch/br1.jpg" alt = "Комплект" className="mainPhotoSet" />
            </Link> 
          </a>
          <a href="/mosaic">
          <Link to="/electro"> 
            <img src="./img/logo/man.jpg" alt = "Брошь" className="mainPhotoBroosh" />
          </Link> 
          </a>
        </div>
      </div>
</main>
)
}

export default Main