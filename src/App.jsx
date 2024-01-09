import { useState } from "react";

import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import Categories from "./components/Categories";
import Bargraph from "./components/Bargraph";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div className="w-[1200px]">
      <Navbar />
      <TimeLine />
      <Categories />
      <Bargraph />
      <PieChart />
    </div>
  );
}

export default App;
