import React from "react";
import { Link } from "react-router-dom";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./editProfile.css";

const EditProfile = () => {
  return (
    <div className="edit__profile__container">
      <div className="pfp__edit">
        <h3 className="edit_subtitles">Profile Picture</h3>
        <img
          src="../images/pfp.jpg"
          alt="placeholder"
          className="pfp__preview"
        />
        <form className="pfp__file__upload" action="">
          <label for="pfp" className="pfp__btn">
            Choose File
          </label>
          <input
            type="file"
            id="pfp"
            name="filename"
            accept=".png,.jpg,.jpeg"
          />
          <SubmitButton>
            <input type="submit" />
          </SubmitButton>
        </form>
      </div>
      <hr className="edit__spacer__line" />
      <div className="edit__content">
        <h3 className="edit_subtitles">First Name*</h3>
        <div className="edit__content__container">
          <p className="user__content">USER CONTENT</p>
        </div>
      </div>
      <hr className="edit__spacer__line" />
      <div className="edit__content">
        <h3 className="edit_subtitles">Last Name*</h3>
        <div className="edit__content__container">
          <p className="user__content">USER CONTENT</p>
        </div>
      </div>
      <hr className="edit__spacer__line" />
      <div className="edit__content">
        <h3 className="edit_subtitles">Email Address*</h3>
        <div className="edit__content__container">
          <p className="user__content">USER CONTENT</p>
        </div>
      </div>
      <hr className="edit__spacer__line" />
      <div className="edit__content">
        <h3 className="edit_subtitles">Password</h3>
        <div className="edit__content__container">
          <p className="user__content">USER CONTENT</p>
        </div>
      </div>
      <hr className="edit__spacer__line" />
      <button className="change__password__btn">Change Password</button>
    </div>
  );
};

export default EditProfile;
