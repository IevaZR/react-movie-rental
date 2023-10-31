import React, { useEffect, useState } from "react";
import "./HomePage.css"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AvailableMoviesTable from "../../Components/AvailableMoviesTable/AvailableMoviesTable";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

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
    <div className="HomePageWrapper">
    <Header/>
      <div className="HomePageMainSectionWrapper">
        <div className="HomePageMainSection">
          <h2 className="HomePageMainSectionHeading">Available Movies</h2>
          <AvailableMoviesTable/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
