import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mobileBurgerMenu.css";

const MobileBurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="burger-menu"
      >
        ☰
      </button>
      {isOpen && (
        <nav className="mobile-nav-menu">
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="mobile-nav-menu__close-btn"
          >
            ✖
          </button>
          <div className="spacer__mobile__1"></div>
          <ul>
            <li>
              <NavLink
                className={(isActive) =>
                  "mobile__nav__link" + (isActive ? " is-active" : "")
                }
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="mobile__nav__link" to="/download">
                Download
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </React.Fragment>
  );
};

export default MobileBurgerMenu;
