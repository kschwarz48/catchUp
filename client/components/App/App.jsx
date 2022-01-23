import React, { useState } from "react";
import Hello from "./Hello";
import Navigation from "../Navigation/Navigation";
import LoginPage from "../LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import FrontPage from "../FrontPage/FrontPage";
import "./app.css";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
