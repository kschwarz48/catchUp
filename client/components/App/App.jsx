import React, { useState } from "react";
import Hello from "./Hello";
import Navigation from "../Navigation/Navigation";
import LoginPage from "../LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import FrontPage from "../FrontPage/FrontPage";
import "./app.css";
import RegisterPage from "../RegisterPage/RegisterPage";
import Dropdown from "../generic/Dropdown/Dropdown";
import Forgot from "../Forgot/Forgot";
// import "./reset.css";      reset.css messed everything up NEEDS REVIEW

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
