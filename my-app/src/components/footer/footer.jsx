import React from "react";
import './footer.css';



function Footer (){
    return(
<footer class="footer">
  <div class="container">
    <div class="footerColumn">
      <nav class="footerNav">
        <a href="#">Личный кабинет</a>
        <a href="#">Наши контакты</a>
        <a href="#">Условия сотрудничества</a>
      </nav>

      <div class="footerSocial">
        <a href="https://vk.com/vogulgems" class="footerLink" target="_blank">
          <img src= "./img/social/contact1.png" alt="Мы в контакте" class="footerImg" />
        </a>
        <a href="https://www.instagram.com/vogulgems/" class="footerLink" target="_blank">
          <img src= "./img/social/contact2.png" alt="Мы в instagram" class="footerImg" />
        </a>
        <a href="https://www.livemaster.ru/artelvogul" class="footerLink" target="_blank">
          <img src="./img/social/contact3.jpg" alt="Мы на ярмарке мастеров" class="footerImg" />
        </a>
      </div>

      <div class="footerCopyright">
        <p>@VogulGems.Интернет-магазин создан Карягиным Михаилом</p>
      </div>
    </div>
  </div>
 </footer>
 )
}

export default Footer