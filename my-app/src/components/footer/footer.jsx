import React from "react";
import './footer.css';
import { Link } from "react-router-dom";



function Footer (){
    return(
<footer className="footer">
  <div className="container">
    <div className="footerColumn">
      <nav className="footerNav">
      <Link to="/about" className = ""> <a href="#">О нас</a></Link>
        <a href="#">Наши контакты</a>
        <a href="#">Условия сотрудничества</a>
      </nav>


      <div className="footerSocial">
        <a href="https://vk.com/vogulgems" className="footerLink" target="_blank">
          <img src= "./img/social/contact1.png" alt="Мы в контакте" className="footerImg" />
        </a>
      
        <a href="https://www.livemaster.ru/artelvogul" className="footerLink" target="_blank">
          <img src="./img/social/contact3.png" alt="Мы на ярмарке мастеров" className="footerImg" />
        </a>
      </div>

      <div className="footerCopyright">
        <p>@VogulGems.Интернет-магазин создан Карягиным Михаилом</p>
      </div>
    </div>
  </div>
 </footer>
 )
}

export default Footer