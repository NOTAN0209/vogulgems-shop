import React from "react";
import './products.css';
import Navigation from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx";


function PageProduct (){

    return(

    <div class="featured">


      <div class ="container">
      <Navigation />
        <div class="featuredHeader">
          <h2 class="featuredTitle">Наши работы</h2>
          <div class="featuredDesc">
            <p>Украшения из натуральных камней</p>
          </div>
        </div>

        <div class="productsWrapper">

         

         

         
          

          
        </div>
      </div>

      <div class="productButton">
        <a href="#" class="buttonOutline">Посмотреть все украшения</a>
      </div>
      <Footer />
    </div>

)    
}

export default PageProduct