import React from "react";
import "./rental.css";

function Rental() {
  return (
    <div className="rental">
      <div className="container">
        <h6>Rent Now</h6>
        <h3>Book Auto Rental</h3>
        <div className="row">
          <form
            action="#"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="option option1">
                <select>
                  <option value="0">Choose Car Type</option>
                  <option value="1">All</option>
                  <option value="2">Luxury Cars</option>
                  <option value="3">Sport Cars</option>
                  <option value="4">SUVs</option>
                  <option value="5">Convertible</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="option option2">
                <select>
                  <option value="0">Pick Up Location</option>
                  <option value="1">Dubai</option>
                  <option value="2">Abu Dhabi</option>
                  <option value="3">Sharjah</option>
                  <option value="4">Alain</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="date">
              <div className="option option3">
                <select>
                  <option value="0">Drop Off Location</option>
                  <option value="1">Alain</option>
                  <option value="2">Sharjah</option>
                  <option value="3">Abu Dhabi</option>
                  <option value="4">Dubai</option>
                </select>
              </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="option option4">
                <select>
                  <option value="0">Car color</option>
                  <option value="1">Red</option>
                  <option value="2">blue</option>
                  <option value="3">black</option>
                  <option value="4">white</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
            <div className="option option5">
                <select>
                  <option value="0">Numbar of peple</option>
                  <option value="1">1 peple</option>
                  <option value="2">2 peple</option>
                  <option value="3">3 peple</option>
                  <option value="4">4 peple</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2">
              <button>Rent Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rental;
