import React from "react";
import './contact.css';
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";

function Contact(){


    return(
        <div className="contact">
            <Navigation/>
            <div className="contactColumn">
                <p className="contactTitle">Наши контакты:</p>
                
                <ul className="contactList">
                    <li className="contactItem"> Телефон: <a href="+79193965351" lassName="contactLink" target="_blank">8(919)396-53-51</a>,(с 8.00 до 20.00 по моск. времени)</li>
                    <li className="contactItem">E-mail: <a href="notan02@mail.ru" lassName="contactLink" target="_blank">Notan02@mail.ru</a></li>
                    <li className="contactItem">Наш адрес: г. Нижний Тагил, Свердловская область</li>
                </ul>
            </div>
          <Footer />
        </div>
    )
}
export default Contact