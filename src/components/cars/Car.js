import React, { useEffect, useState } from "react";
import "./car.css";
import { Link } from "react-router-dom";
function Car(props) {
  let [car, setcar] = useState([]);
  useEffect(() => {
    fetch("https://ashourr.github.io/date1/datepro1/db.json")
      .then((res) => res.json())
      .then((date) => setcar(date.cars));
      console.log(car)
  }, []);

  let cars = car.map((item) => {
    return (
      <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="car-aitm">
          <div className="img">
            <img src={item.img } alt="img1" />
          </div>
          <div className="car-cont">
            <div className={`divcont ${props.light}`}>
              <div className="cont">
                <h6>{item.title}</h6>
                <p>
                  <span> 1{item.price} <span style={{ fontSize: "12px" }}>EGP/day</span> </span> 
                </p>
              </div>
              <div>
                <Link to={`/car/${item.id}`}>
                  <button>Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={`cars ${props.light}`}>
      <div className="container">
        <p className="pti">Select Your Car</p>
        <h3 className={`${props.light}`}>
          Luxury <span>Car Fleet</span>
        </h3>
        <div className="row">{cars}</div>
      </div>
    </div>
  );
}

export default Car;
