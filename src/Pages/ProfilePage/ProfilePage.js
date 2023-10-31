import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import Profile from "../../Components/Profile/Profile";

const ProfilePage = () => {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("current-user"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  });

  return (
    <div className="ProfilePageWrapper">
      <Header />
      <div className="ProfilePageMainSectionWrapper">
        <div className="ProfilePageMainSection">
          <h2 className="ProfilePageMainSectionHeading">Profile</h2>
          <Profile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
