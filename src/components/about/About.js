import React, { useState } from "react";
import "./about.css";
import Modli from "./Modli";
import { Link } from "react-router-dom";
import img from "../../imges/asset 5.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
function About(props) {
  let [show ,setshow]=useState("")
  function notshow() {
    if (show) {
      setshow("")
    } else {
      
    }
  }
  return (
    <section onClick={notshow} className={`about ${props.light}`} id="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-7">
            <div className="content">
              <p className="p1">Rentax</p>
              <h3>
                We Are More Than
                <br />
                <span>A Car Rental Company</span>
              </h3>
              <p>
                Car repair quisque sodales dui ut varius vestibulum drana tortor
                turpis porttiton tellus eu euismod nisl massa nutodio in the
                miss volume place urna lacinia eros nunta urna mauris vehicula
                rutrum in the miss on volume interdum.
              </p>
              <div className="ionc">
                <div>
                  <FontAwesomeIcon icon={faCheck}  className="i" />
                </div>
                <p>Sports and Luxury Cars</p>
              </div>
              <div className="ionc">
                <div>
                  <FontAwesomeIcon icon={faCheck}  className="i" />
                </div>
                <p>Economy Cars</p>
              </div>
              <Link to={"/about"} className={`button ${props.light}`}>
                Read More 
              </Link>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="box">
              <div className="img">
                <img src={img} alt=".." />
                <div className="text">
                  <div onClick={()=>{setshow("show")}}>
                    <i className="fa-solid fa-play"></i>
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div">|</div>
      </div>
      <Modli show={show} />
    </section>
  );
}

export default About;
