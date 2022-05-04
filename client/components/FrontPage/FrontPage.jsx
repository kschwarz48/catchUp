import React from "react";
import { Link } from "react-router-dom";
import "./frontPage.css";

const FrontPage = () => {
  return (
    <main className="front">
      <header className="header__front">
        {/* <p className="front__title__subtext">It's time to Catch Up!</p> */}
        <button className="front__button">
          <Link to="/login">Login</Link>
        </button>
      </header>

      <section className="section">
        <div className="section__column">
          <img
            className="front__image section1"
            src="images/background-run-one.jpg"
            alt="placeholder"
          />
        </div>
        <div className="section__column">
          <div className="text__column">
            <h2 className="front__subtitle">
              Don't get down if you've fallen behind.
            </h2>
            <p className="front__subtext">
              Grab a buddy and get moving. It's time to Catch Up!
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__column">
          <img
            className="front__image section2"
            src="images/background-run-two.jpg"
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
            <button className="front__button__create">
              <Link to="/login">Create Account</Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FrontPage;
