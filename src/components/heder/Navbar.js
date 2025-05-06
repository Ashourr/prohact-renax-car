import "./heder.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
function Navbar(props) {
  return (
    <nav
      style={{ padding: 0 }}
      className={`navbar sticky-top navbar-expand-lg ${props.light}`}
    >
      <div className="container">
        <Link to={"/"} className="navbar-brand" href="#">
          <h3 className={` ${props.light}`}>
            RE<span>N</span>AX
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/home"} className={`nav-link ${props.light}`} href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/about"}
                className={`nav-link ${props.light}`}
                href="#about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/services"}
                className={`nav-link ${props.light}`}
                href="#"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/car"} className={`nav-link ${props.light}`} href="#">
                Cars
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/faq"} className={`nav-link ${props.light}`} href="#">
                Faq’s
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/contact"}
                className={`nav-link ${props.light}`}
                href="#"
              >
                Contact
              </Link>
            </li>
            {/* <li onClick={props.lihe} className="nav-item">
              <div className={`nav-link ico ${props.light}`} href="#">

                {props.light === "dark" ? (
                  <FontAwesomeIcon icon={faMoon} className="ico1" />
                ) : (
                  <FontAwesomeIcon icon={faSun} className="ico2" />
                )}
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
