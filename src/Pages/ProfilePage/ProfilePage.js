import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ProfilePicture from "../../Assets/profile-photo.png";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("current-user"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  });

  function emailValidationCheck(email) {
    const validEmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email !== "" && email.match(validEmailRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const resetEmail = () => {
    const email = prompt("Please enter a new email address");
    if (emailValidationCheck(email)) {
      const updatedUser = {
        ...currentUser,
        email: email,
      };
      setCurrentUser(updatedUser);
      localStorage.setItem("current-user", JSON.stringify(updatedUser));

      const users = JSON.parse(
        localStorage.getItem("react-movie-rental-users")
      );
      const userIndex = users.findIndex((user) => user.id === updatedUser.id);

      if (userIndex !== -1) {
        users[userIndex] = updatedUser;

        localStorage.setItem("react-movie-rental-users", JSON.stringify(users));
      } else {
        alert("Email not valid");
      }
    }
  };

  return (
    <div className="ProfilePageWrapper">
      <Header />
      <div className="ProfilePageMainSectionWrapper">
        <div className="ProfilePageMainSection">
          <h2 className="ProfilePageMainSectionHeading">Profile</h2>
          <div class="ProfilePagePersonalInfoWrapper">
            <img
              src={ProfilePicture}
              class="ProfilePageProfilePhoto"
              alt="profile-icon"
            />
            <div class="ProfilePagePersonalInfo">
              <div class="ProfilePagePersonalInfoText">
                <p>
                  <strong>Name: {currentUser.firstName}</strong>
                </p>
                <p id="UserName"></p>
              </div>
              <div class="ProfilePagePersonalInfoText">
                <p>
                  <strong>Surname: {currentUser.lastName}</strong>
                </p>
                <p id="UserSurname"></p>
              </div>
              <div class="ProfilePagePersonalInfoText">
                <p>
                  <strong>Email: {currentUser.email}</strong>
                </p>
                <p id="UserEmail"></p>
              </div>
            </div>
          </div>
          <div class="ProfilePageButtonsWrapper">
            <button class="BlackButton">Reset password</button>
            <button class="BlackButton" id="ResetEmail" onClick={resetEmail}>
              Reset email
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
