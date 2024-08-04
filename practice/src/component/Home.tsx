import React, { useState } from "react";
import Menu from "../types/Menu";
import FoodData from "../types/FoodData";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <FoodData />
      </div>
    </>
  );
};

export default Home;
