import { useState } from "react";

import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import Categories from "./components/Categories";
import Bargraph from "./components/Bargraph";
import PieChart from "./components/PieChart";
import Table from "./components/Table";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex bg-[#EBEBEB] font-sans">
      <SideBar />
      <div className="w-[1200px] ">
        <Navbar />
        <div className="flex flex-col gap-7">
          <TimeLine />
          <Categories />
          <Bargraph />
          <div className="flex gap-6">
            <PieChart />
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
