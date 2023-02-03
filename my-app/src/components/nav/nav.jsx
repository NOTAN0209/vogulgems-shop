import React from "react";
import './nav.css';
import { Link } from "react-router-dom";



function Navigation (){


  return (

    <nav className ="nav">
      <div className ="navRow">
         <Link to="/"> <a href="#" className="navLogo">VogulGems</a></Link>
        
        <div className="navListHolder">
          <ul className = "navList">
            <li className = "navItem">
              <Link to="/about" className = "navLink">О нас</Link>
            </li>
            <li className = "navItem">
              <Link to="/pendants"> <a href="#" className = "navLink">Кулоны</a></Link>
            </li>
            <li className = "navItem">
              <Link to="/earrings"> <a href="#" className = "navLink">Серьги</a></Link>
            </li>
            <li className = "navItem">
              <Link to="/rings"> <a href="#" className = "navLink">Кольца</a></Link>
            </li>
            <li className = "navItem">
              <Link to="/mosaic"> <a href="#" className = "navLink">Мозайка</a></Link>
            </li>
            <li className = "navItem">
              <Link to="/electro"> <a href="#" className = "navLink">Гальваника</a></Link>
            </li>
          </ul>
        </div>
                  {/* 
                    <div className = "navCard">
                      <span className="navCardNumber">1</span>
                      <a href="#" className="navCardLink">
                        <img src="./img/logo/card.png" alt="Корзина" />
                      </a>
                    </div>
                    <div className="menuIconWrapper">
                    <div className="menuIcon"></div>
                  </div>
                  */}   
      </div>    
    </nav>
)
}
export default Navigation
