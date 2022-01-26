import React from "react";
import { Link } from "react-router-dom";
import "./registerPage.css";

const RegisterPage = () => {
  return (
    <main className="register__main">
      <div className="register__container">
        <h1 className="header__text">Create an account</h1>
        <form action="/register" method="POST">
          <h2 className="login__label">First Name</h2>
          <input
            className="login__input"
            type="text"
            name="firstname"
            required
          />
          <h2 className="login__label">Last Name</h2>
          <input
            className="login__input"
            type="text"
            name="lastname"
            required
          />
          <h2 className="login__label">Email</h2>
          <input className="login__input" type="email" name="email" required />
          <h2 className="login__label">Password</h2>
          <input
            className="login__input"
            type="password"
            name="password"
            required
          />
          <h2 className="login__label">Date of Birth</h2>
          <input className="login__input" type="date" name="dob" required />
          <button className="login__button" type="submit">
            Submit
          </button>
        </form>
        <Link className="already__button" to="/login">
          Already have an account?
        </Link>
      </div>
    </main>
  );
};

export default RegisterPage;
