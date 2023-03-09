import React from "react";
import './footer.css';
import { Link } from "react-router-dom";



function Footer (){
    return(
<footer className="footer">
  <div className="container">
    <div className="footerColumn">
      <nav className="footerNav">
        <Link to="/about"> <a href="/#" className="footerNavLink" rel="noreferrer">О нас</a></Link>
        <Link to="/contact"><a href="/#"className="footerNavLink" rel="noreferrer">Наши контакты</a></Link>
        <Link to="/form"><a href="/#" className="footerNavLink" rel="noreferrer">Заказать</a></Link>
      </nav>


      <div className="footerSocial">
        <a href="https://vk.com/vogulgems" className="footerLink" target="_blank" rel="noreferrer">
          <img src= "./img/social/contact1.png" alt="Мы в контакте" className="footerImg" />
        </a>
      
        <a href="https://www.livemaster.ru/artelvogul" className="footerLink" target="_blank" rel="noreferrer">
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