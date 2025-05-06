import React from "react";
import "./interested.css";
function Interested() {
  return (
    <div className="interested">
      <div className="cont">
        <h6>Rent Your Car</h6>
        <h4>Interested in Renting?</h4>
        <p>Don't hesitate and send us a message</p>
        <div className="bu">
          <div className="bu1">

            <a target="-block" href="https://api.whatsapp.com/send/?phone=201095348649&text&type=phone_number&app_absent=0"> WhatsApp</a>
          </div>
          <div className="bu2">
            <a>Rent Now </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interested;
