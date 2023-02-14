import React from "react";
import "./about.css";
import abouts from "./about.js"
import Footer from "../footer/footer";
import Navigation from '../nav/nav.jsx';



function About (){

return (
<div className ="about">
  <Navigation />
    <div className="aboutHeader">
      <h2 className="aboutTitle">История создания мастерской VogulGems</h2>
      <div className="aboutDesc">
        <p>Нашей мастерской уже больше 10 лет.
          За это время состав команды время от времени менялся.
          К нам приходили талантливые художники, но потом уходили в одиночное плаванье.
          Володя был со мной всегда.Один из основоположников мастерской "Вогул", талантливый камнерез, помощник и просто друг.
          С Вовой мы познакомились ещё в 2013 году. Наши творческие пути пересеклись.
          Володя отлично точит камни, с которыми потом приятно работать!</p>
      </div>
    </div>

    <div className="aboutColumn">
      {abouts.map((about) => (
          <div className="aboutPost" key = {about.row}>
            <img src={about.src} alt={about.alt} className="aboutImg" />
              <div className="postContent">
                <h4 className="postTitle">{about.title}</h4>
                <p className="postText">{about.text}</p>
              </div>
          </div>
        ))}        
    </div> 
    
  <Footer />
</div>  
  
)
}

export default About