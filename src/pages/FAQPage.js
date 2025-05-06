// import React, { useEffect, useState } from "react";
// import FAQHeader from "../components/FAQ’S/FAQHeader";
// import FAQ from "../components/FAQ’S/FAQ";
// import Footer from "../components/footer/Footer";
// import Navbar from "../components/heder/Navbar";

import { useEffect, useState } from "react";
import FAQHeader from "../components/FAQ’S/FAQHeader";
import FAQ from "../components/FAQ’S/FAQ";
import Footer from "../components/footer/Footer";
import Navbar from "../components/heder/Navbar";
import Loading from "../components/loading/Loading";

function FAQPage() {
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
          {/* <Navbar lihe={lihe} bu={light} light={light} /> */}
          {/* <LangAndPhone lihe={lihe} bu={light} light={light} /> */}
          <FAQHeader light={light} />
          <FAQ light={light} />
          <Footer light={light} />
        </>
      )}
    </>
  );
}

export default FAQPage;
