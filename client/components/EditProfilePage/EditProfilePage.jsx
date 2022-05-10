import React from "react";
import { Link } from "react-router-dom";
import ProfileHeader from "../generic/ProfileHeader/ProfileHeader";
import EditProfile from "../generic/EditProfile/EditProfile";
import "./editProfilePage.css";

const EditProfilePage = () => {
  return (
    <main className="profile__container">
      <ProfileHeader></ProfileHeader>
      <EditProfile></EditProfile>
    </main>
  );
};

export default EditProfilePage;
