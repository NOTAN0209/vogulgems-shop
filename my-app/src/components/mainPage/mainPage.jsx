import React from "react";
import "./mainPage.css";
import Navigation from '../nav/nav.jsx';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx'


function mainPage (){
    
    return(
        <body className="body">
            <Navigation />   
            <Header />      
            <Footer />        
        </body>
    )
}

export default mainPage ;
