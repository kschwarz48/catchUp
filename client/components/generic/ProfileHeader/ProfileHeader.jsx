import reactDom from "react-dom";
import react from "react";
import "./profileHeader.css";

const ProfileHeader = () => {
  return (
    <main className="profile__header__main">
      <div className="profile__header__container">
        <img src="../images/pfp.jpg" alt="placeholder" className="pfp" />
        <div className="profile__header__information">
          <h2>Kakashi Sensei</h2>
          <p>Hidden Leaf Village</p>
          <p>Joined April 2022</p>
          <div className="profile__buttons">
            <button className="edit__profile__btn">Edit Proffile</button>
            <p>SVG</p>
            <p>SVG</p>
          </div>
        </div>
        <div className="profile__header__achievements">
          <h2>Achievements</h2>
          <div className="achievements"></div>
        </div>
      </div>
    </main>
  );
};

export default ProfileHeader;
