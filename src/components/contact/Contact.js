import React from "react";
import "./contact.css";
function Contact(props) {
  return (
    <div className={`contact ${props.light}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-7">
            <div className="form">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <h5 className={`${props.light}`}>Get in touch</h5>
                <div className="div1">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`${props.light}`}
                  />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className={`${props.light}`}
                  />
                </div>
                <div className="div1">
                  <input
                    type="text"
                    placeholder="Phone Numbar"
                    className={`${props.light}`}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className={`${props.light}`}
                  />
                </div>
                <div className="div2">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="div3">
                  <button className={`${props.light}`} type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
              <h5 className={`${props.light}`}>Location</h5>
            <div className="ifr">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d890576.0365973708!2d31.154506296947247!3d29.31717102280915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14595d80f161a11f%3A0x3c9aea4c2ab337ed!2z2YXYrdin2YHYuNipINin2YTZgdmK2YjZhQ!5e0!3m2!1sar!2seg!4v1723884304214!5m2!1sar!2seg"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
