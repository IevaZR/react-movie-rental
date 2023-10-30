import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="NavBarWrapper">
      <div>
        <a href="./HomePage.html" className="NavBarLinkHome">
          Home
        </a>
        <a href="./YourMoviesPage.html" className="NavBarLink">
          Your movies
        </a>
        <a href="./ProfilePage.html" className="NavBarLink">
          Profile
        </a>
      </div>
      <button className="LogOutButton" id="LogOutButton">
        Log out
      </button>
    </nav>
  );
};

export default Navbar;
