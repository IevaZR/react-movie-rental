import React from "react";
import "./LoginPage.css";
import Footer from "../../Components/Footer/Footer";
import LoginForm from "../../Components/LoginForm/LoginForm";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const LoginPage = () => {
  return (
    <div className="LoginPageWrapper">
      <h1 className="LoginPageHeading">Movie Rental</h1>
      <LoginForm />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
