import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/Union.png";
import "./header.css";
function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} />
          <span>Xtremecars</span>
        </a>
        <div className="mid-navs">
          <a className="nav-link" href="#">
            New Cars
          </a>

          <a className="nav-link" href="#">
            Used Cars
          </a>
        </div>
        <a className="nav-link" href="#">
          My profile
        </a>
      </nav>
    </div>
  );
}

export default Header;
