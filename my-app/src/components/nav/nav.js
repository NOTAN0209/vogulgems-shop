import react from ''
import "./nav.css"

<nav class ="nav">
    <div class ="container">
      <div class ="navRow">
        <div class="navLogo">
          <a href="#">VogulGems</a>
        </div>

        <div class="navListHolder">
          <ul class = "navList">
            <li class = "navItem">
              <a href="#section-blog" class = "navLink">О нас</a>
            </li>
            <li class = "navItem">
              <a href="#featured" class = "navLink">Наши работы</a>
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
