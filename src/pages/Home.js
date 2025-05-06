import React, { useEffect, useState } from "react";
import Navbar from "../components/heder/Navbar";
import Heder from "../components/heder/Heder";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Rental from "../components/rental/Rental";
import Car from "../components/cars/Car";
import Video from "../components/video/Video";
import New from "../components/new/New";
import Interested from "../components/interested/Interested";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

function Home() {
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
          <Heder />
          <About light={light} />
          <Services light={light} />
          <Rental />
          <Car light={light} />
          <Video />
          <New light={light} />
          <Interested light={light} />
          <Footer light={light} />
        </>
      )}
      {/* <Loading light={light} /> */}
    </>
  );
}

export default Home;
