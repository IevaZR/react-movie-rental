import React, { useContext, useState } from "react";
import { ActiveUserContext } from "./../../HelperFunctions/ActiveUserContext.js";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const { activeUser, setActiveUser } = useContext(ActiveUserContext);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("react-movie-rental-users"))
  );
  const [loginErrorMsg, setLoginErrorMsg] = useState(false);
  const navigate = useNavigate()

  const handleInputData = (event) => {
    setInputData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const loginUser = () => {
    const user = {
      email: inputData.email,
      password: inputData.password,
    };

    const userData = users;
    if (userData) {
      const userFound = userData.some((item) => item.email === user.email);
      if (userFound) {
        const matchedUser = userData.find((item) => item.email === user.email);
        if (matchedUser.password === user.password) {
          localStorage.setItem("current-user", JSON.stringify(matchedUser));
          navigate('/home-page')
        } else {
          setLoginErrorMsg(true);
        }
      } else {
        setLoginErrorMsg(true);
      }
    } else {
      alert("Please register");
    }
  };

  return (
    <form className="LoginPageFormWrapper">
      <label className="LoginPageFormLabel">Email</label>
      <input
        type="email"
        placeholder="email"
        className="LoginPageInput"
        id="loginEmail"
        name="email"
        onChange={handleInputData}
      />
      <label className="LoginPageFormLabel">Password</label>
      <input
        type="password"
        placeholder="password"
        className="LoginPageInput"
        id="loginPassword"
        name="password"
        onChange={handleInputData}
      />
      {loginErrorMsg && (
        <p className="LoginPageValidErrMsg" id="LoginUnsuccessful">
          Incorrect email or password
        </p>
      )}
      <button
        type="button"
        className="BlackButton Centered"
        onClick={loginUser}
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
