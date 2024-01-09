import { useState } from "react";

import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import TimeLine from "./components/TimeLine";
import Categories from "./components/Categories";
import Bargraph from "./components/Bargraph";

function App() {
  const data = useSelector((store) => store.businessReducer);
  return (
    <div className="w-[1200px]">
      <Navbar />
      <TimeLine />
      <Categories />
      <Bargraph />
    </div>
  );
}

export default App;
