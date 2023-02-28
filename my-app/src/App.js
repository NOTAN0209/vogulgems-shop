import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainPage from "./components/mainPage/mainPage.jsx";
import PageProduct from "./components/products/products.jsx";
import About from "./components/about/about.jsx";
import Pendants from "./components/pendants/pendants.jsx";
import Earrings from "./components/earrings/earrings.jsx";
import Rings from "./components/rings/rings.jsx";
import Mosaic from "./components/mosaic/mosaic.jsx";
import Electro from "./components/electro/electro.jsx";
import Contacts from "./components/contact/contact.jsx";
import Form from "./components/form/form.jsx";
import Sets from "./components/set/set.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<MainPage/>}/>
           <Route path="/product" element={<PageProduct/>} />
           <Route path="/about" element={<About/>}/>
           <Route path="/pendants" element={<Pendants/>}/>
           <Route path="/earrings" element={<Earrings/>}/>
           <Route path="/rings" element={<Rings/>}/>
           <Route path="/mosaic" element={<Mosaic/>}/>
           <Route path="/electro" element={<Electro/>}/>
           <Route path="/set" element={<Sets/>}/>
           <Route path="/contact" element={<Contacts/>}/>
           <Route path="/form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
