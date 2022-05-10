import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./componentLibraryPage.css";

const ComponentLibraryPage = () => {
  return (
    <body className="component__body">
      <nav className="component__nav">
        <ul className="component__ul">
          <NavLink to="/currentCompetitionButton">
            <li className="component__li">
              current competition button
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </NavLink>
          <NavLink to="/dropdown">
            <li className="component__li">
              dropdown menu
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </NavLink>
          <NavLink to="/submit">
            <li className="component__li">
              submit button
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </NavLink>
          <NavLink to="/profileHeader">
            <li className="component__li">
              profile header
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </NavLink>
          <NavLink to="/editProfile">
            <li className="component__li">
              edit profile
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </body>
  );
};

export default ComponentLibraryPage;
