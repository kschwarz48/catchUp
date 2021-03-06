import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="main__footer">
      <h2 className="footer__logo">Catch Up</h2>
      <div className="footer__link__container">
        <ul className="footer__nav">
          <li className="footer__links">
            <Link className="footer__a" to="/about">
              About
            </Link>
          </li>
          <li className="footer__links">
            <Link className="footer__a" to="/login">
              Blogg
            </Link>
          </li>
          <li className="footer__links">
            <Link className="footer__a" to="/currentCompetitionButton">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="footer__nav legal">
          <li className="footer__links">
            <Link className="footer__a" to="/dropdown">
              Get Help
            </Link>
          </li>
          <li className="footer__links">
            <Link className="footer__a" to="/submit">
              Terms & Conditions
            </Link>
          </li>
          <li className="footer__links">
            <Link className="footer__a" to="/componentLibrary">
              Component Library
            </Link>
          </li>
        </ul>
      </div>
      <hr className="spacer__line" />
      <div className="social__container">
        <a href="https://www.facebook.com">
          <img
            className="social__icons"
            src="images/facebook.png"
            alt="facebook"
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            className="social__icons"
            src="images/instagram.png"
            alt="instagram"
          />
        </a>
        <p className="copyright">© {year} Catch Up Technologies Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
