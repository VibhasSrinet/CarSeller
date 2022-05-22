import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../asset/Union.png";
import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <img src={logo} />
          <span>Xtremecars</span>
        </Link>
        <div className="mid-navs">
          <Link className="nav-link" to="#">
            New Cars
          </Link>

          <Link className="nav-link" to="#">
            Used Cars
          </Link>
        </div>
        <Link className="nav-link" to="#">
          My profile
        </Link>
      </nav>
    </div>
  );
}

export default Header;
