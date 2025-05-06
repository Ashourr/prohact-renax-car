import React, { useEffect, useState } from "react";
import Details from "../components/details/Details";
import DetailsHeder from "../components/details/DetailsHeder";
import Navbar from "../components/heder/Navbar";
import Rental from "../components/rental/Rental";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";
function CarDetails() {
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
          <DetailsHeder />
          <Details light={light} />
          <Rental />
          <Footer light={light} />
        </>
      )}
    </>
  );
}

export default CarDetails;
