import React from "react";
import PagesLayout from "../Components/PagesLayout/PagesLayout";

const HomePage = () => {
  return (
    <div className="HomePageWrapper">
      <PagesLayout
        PageHeading="Movie rental"
        MainSectionHeading="Available Movies"
      />
    </div>
  );
};

export default HomePage;
