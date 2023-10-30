import React from "react";
import "./PagesLayout.css"
import Navbar from "../Navbar/Navbar";
import AvailableMoviesTable from "../AvailableMoviesTable/AvailableMoviesTable";

const PagesLayout = ({ PageHeading, MainSectionHeading }) => {
  return (
    <div className="PagesLayoutWrapper">
      <h1 className="PageHeading">{PageHeading}</h1>
      <Navbar/>
      <div class="MainSection">
        <h2 class="MainSectionHeading">{MainSectionHeading}</h2>
        <AvailableMoviesTable/>
      </div>
    </div>
  );
};

export default PagesLayout;
