import React from "react";
import { Link, NavLink } from "react-router-dom";
import MobileBurgerMenu from "./MobileBurgerMenu";
import "./navigation.css";

const Navigation = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="nav__elements">
          <li className="nav__li">
            <NavLink className="head__logo" to="/">
              <h1>Catch-Up</h1>
            </NavLink>
          </li>
          <li className="nav__li nav__button">
            <Link to="/login" className="header__button">
              Login
            </Link>
            <MobileBurgerMenu></MobileBurgerMenu>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
