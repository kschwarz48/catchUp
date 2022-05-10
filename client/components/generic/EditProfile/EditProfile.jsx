import React from "react";
import { Link } from "react-router-dom";
import "./editProfile.css";

const EditProfile = () => {
  return (
    <div className="edit__profile__container">
      <h3>Profile Picture</h3>
      <hr className="edit__spacer__line" />
      <h3>First Name*</h3>
      <hr className="edit__spacer__line" />
      <h3>Last Name*</h3>
      <hr className="edit__spacer__line" />
      <h3>Email Address*</h3>
      <hr className="edit__spacer__line" />
      <h3>Password</h3>
      <hr className="edit__spacer__line" />
      <button className="change__password__btn">Change Password</button>
    </div>
  );
};

export default EditProfile;
