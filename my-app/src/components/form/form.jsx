import React from 'react';
import './form.css';
import emailjs from 'emailjs-com';

function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_e8sx6bo', 'template_zih8yuj', e.target, 'Bw-msYn_aigVCsFV7')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contactForm" onSubmit={sendEmail}>
        <label className="contactFormTitle">Имя и Фамилия</label>
            <input className="contactFormName" placeholder="Ваше имя и фамилия" type="text" name="formName" />
        <label className="contactFormTitle">Email</label>
            <input className="contactFormEmail"  placeholder="Ваш почтовый ящик" type="email" name="formEmail" />
      <label className="contactFormTitle">Сообщение</label>
            <input className="contactFormMessage"  placeholder="Ваш заказ" type="textarea" name="formMessage" />
      <input className="contactFormBtn" type="submit" value="Отправить" />
    </form>
  );
}
export default ContactUs