import React from "react";
import "./heder.css";


function Heder() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2500">
          <div className="img1"></div>
          <div className="carousel-caption d-md-block">
            <p>* Premium</p>
            <h5>Rental Car</h5>
            <p>
              Bentley Bentayga <span>$600</span>/Day
            </p>
            <div>
              <a className="b1">View Details</a>
              <a className="b2">Rent Now</a>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <div className="img2"></div>
          <div className="carousel-caption d-md-block">
            <p>* Premium</p>
            <h5>Rental Car</h5>
            <p>
              Bentley Bentayga <span>$900</span>/Day
            </p>
            <div>
              <a className="b1">View Details</a>
              <a className="b2">Rent Now</a>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <div className="img3"></div>
          <div className="carousel-caption d-md-block">
            <p>* Premium</p>
            <h5>Rental Car</h5>
            <p>
              Bentley Bentayga <span>$450</span>/Day
            </p>
            <div>
              <a className="b1">View Details</a>
              <a className="b2">Rent Now</a>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Heder;
