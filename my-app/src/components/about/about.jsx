import React from "react";
import "./about.css";
import Footer from "../footer/footer";
import Navigation from '../nav/nav.jsx';



function About (){

return (
<div class ="about">
    <Navigation />
      <div class="container">
        <div class="aboutHeader">
          <h2 class="aboutTitle">История создания мастерской VogulGems</h2>
          <div class="aboutDesc">
            <p>Нашей мастерской уже больше 10 лет.
              За это время состав команды время от времени менялся.
              К нам приходили талантливые художники, но потом уходили в одиночное плаванье.
              Володя был со мной всегда.Один из основоположников мастерской "Вогул", талантливый камнерез, помощник и просто друг.
              С Вовой мы познакомились ещё в 2013 году. Наши творческие пути пересеклись.
              Володя отлично точит камни, с которыми потом приятно работать!</p>
          </div>
        </div>

        <div class="aboutRow">
          <a href="#" class="aboutLink">
            <img src="./img/person/per5.jpg" alt="Владимир и Михаил" class="aboutImg" />
          </a>
          <a href="#" class="aboutLink">
            <img src="./img/person/per6.jpg" alt="Владимир и Михаил" class="aboutImg" />
          </a>
        </div>

        <div class="postsWrapper">
          <div class="post">
            <img src="./img/person/per1.jpg" alt="Участник мастерской" class="postImg" />
            <div class="postContent">
              <h4 class="postTitle">Михаил Карягин</h4>
              <p class="postText">Мастер по обработке металла и основатель мастерской</p>
              <a href="#" class="postReadMore">Подробнее</a>
            </div>
          </div>

          <div class="post">
            <img src="./img/person/per2.jpg" alt="Участник мастерской" class="postImg" />
            <div class="postContent">
                <h4 class="postTitle">Сихряев Владимир</h4>
                <p class="postText">Мастер по обработке камня и основатель мастерской</p>
                <a href="#" class="postReadMore">Подробнее</a>
            </div>
          </div>

          <div class="post">
            <img src="./img/person/per3.jpg" alt="Выставки-ярмарки" class="postImg" />
            <div class="postContent">
              <h4 class="postTitle">Участвуем на выставках</h4>
              <p class="postText">Минералогические и ювелирные ярмарки</p>
              <a href="#" class="postReadMore">Подробнее</a>
            </div>
          </div>

          <div class="post">
            <img src="./img/person/per4.jpg" alt="Добыча минералов" class="postImg" />
            <div class="postContent">
              <h4 class="postTitle">Добываем сырье</h4>
              <p class="postText">Добыча минералов по всей стране</p>
              <a href="#" class="postReadMore">Подробнее</a>
            </div>
          </div>
        </div>
        
    </div>
  <Footer />
</div>  
  
)
}

export default About