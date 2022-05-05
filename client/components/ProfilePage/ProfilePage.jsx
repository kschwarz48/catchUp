import React from "react";
import { Link } from "react-router-dom";
import CurrentCompetitionButton from "../generic/CurrentCompetitionButton/CurrentCompetitionButton";
import "./profilePage.css";

const ProfilePage = () => {
  return (
    <main className="profile__container">
      <div className="profile__head__container"></div>
      <div className="competition__container">
        <h2>Current Competitions</h2>
        <CurrentCompetitionButton></CurrentCompetitionButton>
        <CurrentCompetitionButton></CurrentCompetitionButton>
        <CurrentCompetitionButton></CurrentCompetitionButton>
      </div>
    </main>
  );
};

export default ProfilePage;
