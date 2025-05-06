import React from "react";
import "./about.css";
import Video from  "../../imges/Car_Rental_Video(720p).mp4";

function Modli(props) {
  return (
    <div>
      <div>
        <div></div>
        {props.show === "show" ? (
          <div className={`modli`}>
            <a>x</a>
            <video controls autoPlay loop>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Modli;
