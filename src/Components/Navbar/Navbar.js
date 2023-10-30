import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <button className="LogOutButton" id="LogOutButton">
        Log out
      </button>
    </nav>
  );
};

export default Navbar;
