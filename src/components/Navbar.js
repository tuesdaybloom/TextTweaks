import React from "react";
import PropTypes from "prop-types";
import Theme from "./Theme";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/about">{props.title}</a>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
      </ul>
    </div>
    <div className="d-flex flex-md-row flex-column">
    <Theme cmode={props.mode}/>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.changeMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.able} Dark Mode
          </label>
      </div>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
