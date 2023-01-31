import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainPage from "./components/mainPage/mainPage.jsx";
import PageProduct from "./components/products/products.jsx";
import About from "./components/about/about.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<MainPage/>}/>
           <Route path="/product" element={<PageProduct/>} />
           <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
