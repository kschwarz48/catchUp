import React from "react";
import { Link } from "react-router-dom";
import "./frontPage.css";

const FrontPage = () => {
  return (
    <main className="front">
      <header className="header__front">
        <h1 className="front__title">Catch-Up</h1>
        <p className="front__title__subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          hendrerit, nisl a molestie dapibus, diam eros vehicula mi, eget
          dignissim arcu neque vitae dolor.
        </p>
        <button className="front__button">
          <Link to="/login">Login</Link>
        </button>
      </header>

      <section className="section">
        <div className="section__column">
          <img
            className="front__image section1"
            src="images/placeholder.png"
            alt="placeholder"
          />
        </div>
        <div className="section__column">
          <div className="text__column">
            <h2 className="front__subtitle">Lorem ipsum dolor sit amet</h2>
            <p className="front__subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ultrices.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__column">
          <img
            className="front__image section2"
            src="images/placeholder.png"
            alt="placeholder"
          />
        </div>
        <div className="section__column">
          <div className="text__column">
            <h2 className="front__subtitle">
              Ready to compete with you friends and family?
            </h2>
            <p className="front__subtext">
              Get started now with a free account!
            </p>
            <Link className="section__nav" to="/login">
              Login
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FrontPage;
