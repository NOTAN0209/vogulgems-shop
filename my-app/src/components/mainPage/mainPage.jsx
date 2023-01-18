import React from "react";
import "./mainPage.css";
import Navigation from '../nav/nav.jsx';

import Header from '../header/header.jsx';

function mainPage (){
    
    return(
        <body className="body">
            <Header />      
            <Navigation />               
       
        </body>
    )
}

export default mainPage ;
