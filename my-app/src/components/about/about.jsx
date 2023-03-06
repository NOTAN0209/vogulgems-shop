import React from "react";
import "./about.css";
import Footer from "../footer/footer";
import Navigation from '../nav/nav.jsx';



function About (){

return (
<div className ="about">
  <Navigation />
  <div className="aboutRow">

    <div className="aboutHeader">

      <h2 className="aboutTitle">История создания мастерской VogulGems</h2>

          <p className="aboutText">Нашей мастерской уже больше 10 лет.
            За это время состав команды время от времени менялся.
            К нам приходили талантливые художники, но потом уходили в одиночное плаванье.
            Володя был со мной всегда.Один из основоположников мастерской "Вогул", талантливый камнерез, помощник и просто друг.
            С Вовой мы познакомились ещё в 2013 году. Наши творческие пути пересеклись.
            Володя отлично точит камни, с которыми потом приятно работать!</p>
        
    </div>

    <div className="aboutColumn">
          <div className="aboutPost">
            <img src="./img/person/per1.jpg" alt="Михаил Карягин" className="aboutImg" />
              <div className="postContent">
                <h4 className="postTitle"><a href="https://vk.com/notan0209" target="_blank">Михаил Карягин</a></h4>
                <p className="postText">Мастер по  художественной обработке металла</p>
              </div>
          </div>

          <div className="aboutPost">
            <img src="./img/person/per2.jpg" alt="Владимир Сихряев" className="aboutImg" />
              <div className="postContent">
                <h4 className="postTitle"><a href="https://vk.com/bloodimir51" target="_blank">Владимир Сихряев</a></h4>
                <p className="postText">Мастер по художественной обработке камня</p>
              </div>
          </div>

          <div className="aboutPost">
            <img src="./img/person/per3.jpg" alt="Выставки-ярмарки" className="aboutImg" />
              <div className="postContent">
                <h4 className="postTitle">Участвуем в выставках</h4>
                <p className="postText">Минералогические и ювелирные ярмарки</p>
              </div>
          </div>

          <div className="aboutPost">
            <img src="./img/person/per4.jpg" alt="Добыча минералов" className="aboutImg" />
              <div className="postContent">
                <h4 className="postTitle">Добываем минералы</h4>
                <p className="postText">Добыча минералов по всей стране</p>
              </div>
          </div>

          <div className="aboutPost">
            <img src="./img/person/per5.jpg" alt="Владимир и Михаил" className="aboutImg" />
              <div className="postContent">
                <h4 className="postTitle"></h4>
                <p className="postText"></p>
              </div>
          </div>

          <div className="aboutPost">
            <img src="./img/person/per6.jpg" alt="Владимир и Михаил" className="aboutImg" />
              <div className="postContent">
                <h4 className="postTitle"></h4>
                <p className="postText"></p>
              </div>
          </div>
       
            
    </div> 
  </div>
  <Footer />
</div>  
  
)
}

export default About