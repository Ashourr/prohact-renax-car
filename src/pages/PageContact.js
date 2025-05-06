import React, { useEffect, useState } from "react";
import Navbar from "../components/heder/Navbar";
import Contact from "../components/contact/Contact";
import Rental from "../components/rental/Rental";
import Footer from "../components/footer/Footer";
import ConactHeder from "../components/contact/ConactHeder";
import Loading from "../components/loading/Loading";

function PageContact() {
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
    },500)
  }, []);
  return (
    <>
      {show ? (
        <Loading light={light} />
      ) : (
        <>
          <Navbar lihe={lihe} bu={light} light={light} />
          <ConactHeder />
          <Contact light={light} />
          <Rental />
          <Footer light={light} />
        </>
      )}
    </>
  );
}

export default PageContact;
