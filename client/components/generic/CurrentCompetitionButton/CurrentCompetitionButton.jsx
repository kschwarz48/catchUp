import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./currentCompetitionButton.css";

const CurrentCompetitionButton = () => {
  return (
    <div className="btn__container">
      <NavLink to="/">
        <div className="currentCompetitionButton">
          <div className="image__column">
            <div className="currentImageContainer">
              <img
                className="competitionImg"
                src="../images/currentCompImg.jpg"
                alt="placeholder"
              />
            </div>
          </div>
          <div className="competition__text">
            <h2 className="competition__title">Competition Name</h2>
            <p className="competition__description">Competition Type</p>
            <p className="competition__description">Number of Participants</p>
            <p className="competition__description">Dates</p>
          </div>
          {/* <Link to="/currentComp"></Link> */}
          <svg
            className="svg"
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9492 13.0641C11.5369 13.648 12.4867 13.6449 13.0705 13.0572L22.5854 3.48024C23.1692 2.89255 23.1661 1.9428 22.5785 1.35893C21.9908 0.77505 21.041 0.778141 20.4571 1.36583L11.9995 9.87869L3.48667 1.42107C2.89898 0.83719 1.94924 0.840281 1.36536 1.42797C0.781484 2.01566 0.784575 2.9654 1.37227 3.54928L10.9492 13.0641ZM10.5032 11.0049L10.5064 12.0049L13.5064 11.9951L13.5032 10.9951L10.5032 11.0049Z"
              fill="black"
            />
          </svg>
        </div>
      </NavLink>
    </div>
  );
};

export default CurrentCompetitionButton;
