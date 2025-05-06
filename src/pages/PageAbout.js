import React, { useEffect, useState } from "react";
import Navbar from "../components/heder/Navbar";
import AboutHeder from "../components/about/AboutHeder";
import About from "../components/about/About";
import Video from "../components/video/Video";
import Rental from "../components/rental/Rental";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

function PageAbout() {
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
    window.scroll(0,0);
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
          <AboutHeder />
          <About light={light} />
          <Video />
          <Rental />
          <Footer light={light} />
        </>
      )}
    </>
  );
}

export default PageAbout;
