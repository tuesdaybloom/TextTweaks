import React from "react";
import PropTypes from "prop-types";
import Theme from "./Theme";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
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
  </div>
</nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

