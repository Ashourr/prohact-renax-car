import React, { useState } from "react";
import "./video.css";
import Modli from "../about/Modli";
import video from "../../imges/Car_Rental_Video(720p).mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
function Video(props) {
  let [show ,setshow]=useState("")
  function notshow() {
    if (show) {
      setshow("")
    } else {
      
    }
  }
  return (
    <div className="video"onClick={notshow}  >
      <div className="video-aitm">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="cont">
        <p>Explore</p>
        <h4>
          Car <span>Promo</span> Video
        </h4>
        <div onClick={()=>{setshow("show")}}>
          <FontAwesomeIcon icon={faPlay} className="i" />
        </div>
      </div> 
      <Modli  show={show}  />
    </div>
  );
}

export default Video;
