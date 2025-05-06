import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
function Details(props) {
  let [carid, setcatid] = useState([]);
  let params = useParams();
  useEffect(() => {
    fetch(`https://ashourr.github.io/date1/datepro1/db.json`)
      .then((res) => res.json())
      .then((date) => setcatid(date.cars[`${params.carid - 1}`]));
  }, []);
  return (
    <div className={`Details ${props.light}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md -6">
            <img src={carid.img} alt="img1" />
          </div>
          <div className="col-12 col-md -6">
            <h3>{carid.title}</h3>
            <h6>
              1{carid.price}<span className={`${props.light}`}><span style={{ fontSize: "15px" }}> EGP/day</span></span>
            </h6>
            <p>
              Lorem pretium fermentum quam, sit amet cursus ante sollicitudin
              velen morbi consesua the miss sustion consation porttitor orci sit
              amet iaculis nisan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
