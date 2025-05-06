import React from "react";
import "./footer.css";
import Slidercop from "./Slidercop";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMagnifyingGlass,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Footer(props) {
  return (
    <div>
      <Slidercop light={props.light} />
      <div className={`contactfooter ${props.light}`}>
        <div className="container">
          <div className="row">
            <div className="div">
              <div className="col-12  col-md-6 col-lg-4">
                <div className={`cont ${props.light}`}>
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div className="cont-aitm">
                    <h5>Call us</h5>
                    <p>+2 0109 534 8649</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className={`cont ${props.light}`}>
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="cont-aitm">
                    <h5>Write to us</h5>
                    <p>Ashour25@gamil.com</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className={`cont ${props.light}`}>
                  <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="cont-aitm">
                    <h5>Address</h5>
                    <p>Egypt, El-fayoum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`footer ${props.light}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="logo">
                <h4 className={`${props.light}`}>
                  RE<span>N</span>AX
                </h4>
                <p>
                  Rent a car imperdiet sapien porttito the bibenum ellentesue
                  the commodo erat nesuen.
                </p>
                <div className="icon ">
                  <a
                    className={`a ${props.light}`}
                    target="-block"
                    href="https://www.facebook.com/profile.php?id=100005869890293&mibextid=JRoKGi"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="i" />
                  </a>
                  <a
                    className={`a ${props.light}`}
                    target="-block"
                    href="https://www.instagram.com/shwr7055?igsh=MTY2dDI0eG1wdDJiMg=="
                  >
                    <FontAwesomeIcon icon={faInstagram} className="i" />
                  </a>
                  <a
                    className={`a ${props.light}`}
                    target="-block"
                    href="https://api.whatsapp.com/send/?phone=201095348649&text&type=phone_number&app_absent=0"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="i" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="list">
                <h4>QuicK Links</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to={"/services"}>Services</Link>
                  </li>
                  <li>
                    <Link to={"/car"}>Cars</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="serch">
                <h4>Subscribe</h4>
                <p>
                  Cars Car Types Team Contact Subscribe Want to be notified
                  about our services. Just sign up and we'll send you a
                  notification by email.
                </p>
                <div>
                  <input type="text" placeholder="Email Address" />
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="i2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`copy ${props.light}`}>
        <p>Copyright 2024 &copy; All Right Reserved</p>
        <h6>Ashour (ابن الناظر)</h6>
      </div>
    </div>
  );
}

export default Footer;
