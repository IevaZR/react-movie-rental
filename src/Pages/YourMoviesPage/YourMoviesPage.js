import React, { useEffect, useState } from "react";
import "./YourMoviesPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import YourMoviesTable from "../../Components/YourMoviesTable/YourMoviesTable";
import { useNavigate } from "react-router-dom";

const YourMoviesPage = () => {
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
    <div className="YourMoviesPageWrapper">
      <Header />
      <div className="YourMoviesPageMainSectionWrapper">
        <div className="YourMoviesPageMainSection">
          <h2 className="YourMoviesPageMainSectionHeading">Your Movies</h2>
          <YourMoviesTable />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YourMoviesPage;
