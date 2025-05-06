import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageAbout from "./pages/PageAbout";
import PageServices from "./pages/PageServices";
import PageContact from "./pages/PageContact";
import CarDetails from "./pages/CarDetails";
import PageCar from "./pages/PageCar";
import FAQ from "./pages/FAQPage";
import FAQPage from "./pages/FAQPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<PageAbout />} />
        <Route path="services" element={<PageServices />} />
        <Route path="car" element={<PageCar />} />
        <Route path="car/:carid" element={<CarDetails />} />
        <Route path="faq" element={ <FAQPage />}/>
        <Route path="contact" element={<PageContact />} />
      </Routes>
    </>
  );
}

export default App;
