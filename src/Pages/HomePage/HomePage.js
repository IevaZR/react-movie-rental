import React from "react";
import "./HomePage.css"
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import AvailableMoviesTable from "../../Components/AvailableMoviesTable/AvailableMoviesTable";

const HomePage = () => {
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
