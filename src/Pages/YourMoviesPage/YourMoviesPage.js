import React from "react";
import "./YourMoviesPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import YourMoviesTable from "../../Components/YourMoviesTable/YourMoviesTable";

const YourMoviesPage = () => {
  return (
    <div className="YourMoviesPageWrapper">
      <Header/>
      <div className="YourMoviesPageMainSectionWrapper">
        <div className="YourMoviesPageMainSection">
          <h2 className="YourMoviesPageMainSectionHeading">Your Movies</h2>
          <YourMoviesTable/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default YourMoviesPage;
