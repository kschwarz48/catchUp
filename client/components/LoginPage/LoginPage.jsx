import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./loginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/login", { email, password });
    console.log(response);
  };

  return (
    <main className="login__main">
      <div className="login__container">
        <h1 className="header__text">Welcome back!</h1>
        <p className="header__subtext">
          We're happy to see you're catching up!
        </p>
        <form onSubmit={handleSubmit}>
          <h2 className="login__label">email</h2>
          <input
            className="login__input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            required
          />
          <h2 className="login__label">password</h2>
          <input
            className="login__input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            required
          />
          <Link className="login__link forgot" to="/forgot">
            Forgot Password?
          </Link>
          <button className="login__button" type="submit">
            Login
          </button>
        </form>

        <p className="register">
          Need Account?
          <Link className="login__link register__button" to="/register">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
