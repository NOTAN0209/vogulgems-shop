import React from "react";
import "./about.css";
import Footer from "../footer/footer";
import Navigation from '../nav/nav.jsx';



function About (){

return (
<section class ="about">
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

      <div class="aboutrow">
        <a href="#" class="aboutlink">
          <img src="./img/person/per5.jpg" alt="Владимир и Михаил" class="aboutimg" />
        </a>
        <a href="#" class="aboutlink">
          <img src="./img/person/per6.jpg" alt="Владимир и Михаил" class="aboutimg" />
        </a>
      </div>

      <form action="" class="aboutform">
        <input placeholder="Укажите свою почту" type="text" class="aboutinput" />
        <button class="aboutsubmit">Отправить</button>
      </form>
    </div>
    <Footer />
  </section>
)
}

export default About