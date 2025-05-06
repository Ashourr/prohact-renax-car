import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./footer.css";

function Slidercop(props) {
  let [slider, setSlider] = useState([]);
  useEffect(() => {
    fetch("https://ashourr.github.io/date1/datepro1/db.json")
      .then((res) => res.json())
      .then((date) => setSlider(date.model));
  }, []);

  let model = slider.map((item) => {
    return (
      <div key={item.id} className="img">
        <img src={item.img} alt="..." />
      </div>
    );
  });
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`slidercop ${props.light}`}>
      <div className="container">
        <div className="slider-container">
          <Slider {...settings}>
            {model}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slidercop;
