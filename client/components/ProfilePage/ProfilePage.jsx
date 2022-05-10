import React from "react";
import { Link } from "react-router-dom";
import CurrentCompetitionButton from "../generic/CurrentCompetitionButton/CurrentCompetitionButton";
import ProfileHeader from "../generic/ProfileHeader/ProfileHeader";
import "./profilePage.css";

const ProfilePage = () => {
  return (
    <main className="profile__container">
      <ProfileHeader></ProfileHeader>
      <div className="competitions__container">
        <h2 className="pf__competition__title">Current Competitions</h2>
        <CurrentCompetitionButton></CurrentCompetitionButton>
        <CurrentCompetitionButton></CurrentCompetitionButton>
        <CurrentCompetitionButton></CurrentCompetitionButton>
      </div>
    </main>
  );
};

export default ProfilePage;
