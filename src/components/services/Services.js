import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./services.css";

function Services(props) {
  let [services, setservices] = useState([]);
  useEffect(() => {
    fetch("https://ashourr.github.io/date1/datepro1/db.json")
      .then((res) => res.json())
      .then((date) => setservices(date.services));
  }, []);
  let serviceslist = services.map((itme) => {
    return (
      <div key={itme.id} className="servicediv">
        <div className="service">
          <div className="ser-atim">
            <div className={`ser-cont `}>
              <div className={`po ${props.light}`}>
                <p>{itme.numbar}</p>
              </div>
              <img width={"100%"} src={itme.img} alt=".." />
              <h6>{itme.text}</h6>
            </div>
          </div>
        </div>
      </div>
    );
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pausehOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`services ${props.light}`}>
      <p className="p">What We Do</p>
      <h3 className={`${props.light}`}>
        Our <span> Services</span>
      </h3>
      <div className=" container  ">
        <Slider {...settings}>{serviceslist}</Slider>
      </div>
    </div>
  );
}

export default Services;
