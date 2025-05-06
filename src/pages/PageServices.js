import React, { useEffect, useState } from "react";
import Navbar from "../components/heder/Navbar";
import ServicesHeder from "../components/services/ServicesHeder";
import Services from "../components/services/Services";
import Video from "../components/video/Video";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

function PageServices() {
  let [light, setlight] = useState("light");
  let [show, setshow] = useState(true);
  function lihe() {
    if (light === "light") {
      setlight("dark");
      localStorage.setItem("light", "dark");
    } else {
      setlight("light");
      localStorage.setItem("light", "light");
    }
  }
  useEffect(() => {
    setlight(localStorage.getItem("light"));
    window.scroll(0, 0);
    setTimeout(() => {
      setshow(false);
    }, 500);
  }, []);
  return (
    <>
      {show ? (
        <Loading light={light} />
      ) : (
        <>
          <Navbar lihe={lihe} bu={light} light={light} />
          <ServicesHeder />
          <Services light={light} />
          <Video />
          <Footer light={light} />
        </>
      )}
    </>
  );
}

export default PageServices;
