import React from "react";
import './header.css';
import { Link } from "react-router-dom";


function header() {

return(
  <header className="header">
    <div className="container">
      <div className="headerRow">
        <div className="headerContent">
          <h1 className="headerTitle">VogulGems</h1>
          <div className="headerText">
            <p>Творческая мастерская ювелира и камнереза!<br />Создаём уникальные украшения ручной работы с натуральными камнями</p>
          </div>

          <div className="headerBtn">
            <a href="#" className="button">Подробнее</a>
          </div>
        </div>

        <div className="headerPhoto">
          <a href="">
            <Link to="/pendants"> 
              <a href="#" classNameName = "navLink"><img src="../img/logo/pend.jpg" alt = "Кулон" className="headerPhotoPendant" /></a>
            </Link>  
          </a>
          <a href="">
            <Link to="/rings"> 
              <img src="./img/logo/ring.jpg" alt = "Кольцо" className="headerPhotoRing" />
            </Link> 
          </a>
          <a href="">
            <Link to="/electro"> 
              <img src="./img/broch/br1.jpg" alt = "Комплект" className="headerPhotoSet" />
            </Link> 
          </a>
          <a href="/mosaic">
          <Link to="/electro"> 
            <img src="./img/logo/man.jpg" alt = "Брошь" className="headerPhotoBroosh" />
          </Link> 
          </a>
        </div>
      </div>
    </div>
</header>
)
}

export default header