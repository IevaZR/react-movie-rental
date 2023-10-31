import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("current-user");
    navigate("/");
  };
  return (
    <nav className="NavBarWrapper">
      <div>
        <Link to="/home-page" className="NavBarLinkHome">
          Home
        </Link>
        <Link to="/your-movies-page" className="NavBarLink">
          Your movies
        </Link>
        <Link to="/profile-page" className="NavBarLink">
          Profile
        </Link>
      </div>
      <button className="LogOutButton" id="LogOutButton" onClick={logOut}>
        Log out
      </button>
    </nav>
  );
};

export default Navbar;
