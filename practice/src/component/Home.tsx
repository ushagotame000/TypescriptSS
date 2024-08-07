import React, { useState } from "react";
import Menu from "../types/Menu";
import FoodData from "../types/FoodData";
import Navbar from "../types/Nav";

const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <Navbar/>
        <FoodData />
      </div>
    </>
  );
};

export default Home;
