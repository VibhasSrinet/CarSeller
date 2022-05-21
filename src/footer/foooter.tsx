import React from "react";
import { Link } from "react-router-dom";
import fb from "../asset/fb.png";
import insta from "../asset/insta.png";
import twitter from "../asset/twitter.png";
import "./footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="contacts">
        <h2>Contact</h2>
        <div>
          <div>
            <Link className="forlinks" to="#">
              Request a Test Drive
            </Link>
          </div>
          <div>
            <Link className="forlinks" to="#">
              Book Car
            </Link>
          </div>
          <div>
            <Link className="forlinks" to="#">
              Career
            </Link>
          </div>
          <div>
            <Link className="forlinks" to="#">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="address">
        <h2>Xtremecars</h2>
        <p>
          12th Floor, Vishwaroop IT
          <br /> Park , Sector 32, Vashi,
          <br /> Navi Mumbai - 400705.
          <br /> Maharashtra, India.
        </p>
        <p>
          <br />
          Phone: +91 (22) 612 800000
        </p>
      </div>
      <div className="contacts">
        <h2>Legal</h2>
        <div>
          <div>
            <Link className="forlinks" to="#">
              Legal Legal Disclaimer/Imprint
            </Link>
          </div>
          <div>
            <Link className="forlinks" to="#">
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link className="forlinks" to="#">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="contacts">
        <h2>Connect with us</h2>
        <div className="icons">
          <Link to="#">
            <img src={fb} />
          </Link>
          <Link to="#">
            <img src={twitter} />
          </Link>
          <Link to="#">
            <img src={insta} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
