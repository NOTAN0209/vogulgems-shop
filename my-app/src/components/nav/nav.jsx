import React from "react";
import './nav.css';
import { Link } from "react-router-dom";

function navigation (){

  return (

    <nav class ="nav">
        <div class ="container">
          <div class ="navRow">
            <div class="navLogo">
              <Link to="/"> 
                <a href="#">VogulGems</a>
              </Link>
            </div>
         
              <div class="navListHolder">
                <ul class = "navList">
                  <li class = "navItem">
                    <Link to="/about" class = "navLink">О нас</Link>
                  </li>
                  <li class = "navItem">
                   <Link to="/product" class = "navLink">Наши работы</Link>                  
                  </li>
                  <li class = "navItem">
                    <a href="#footer" class = "navLink">Контакты</a>
                  </li>
                </ul>
              </div>
          
            <div class = "navCard">
              <span class="navCardNumber">1</span>
              <a href="#" class="navCardLink">
                <img src="./img/logo/card.png" alt="Корзина" />
              </a>
            </div>

            <div class="menuIconWrapper">
              <div class="menuIcon"></div>
            </div>
          </div>
        </div>
    </nav>
 
)
}
export default navigation
