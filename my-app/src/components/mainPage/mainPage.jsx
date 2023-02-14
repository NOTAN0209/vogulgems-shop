import React from "react";
import "./mainPage.css";
import Navigation from '../nav/nav.jsx';
import Main from '../main/main.jsx';
import Footer from '../footer/footer.jsx'


function mainPage (){
    
    return(
        <body className="body">
            <Navigation />   
            <Main />      
            <Footer />        
        </body>
    )
}

export default mainPage ;
