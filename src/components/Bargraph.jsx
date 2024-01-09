import React, { useEffect } from "react";
import data from "../data.json";

import { BarChart } from "../Chart";
import { useDispatch } from "react-redux";

import { successBusiness } from "../redux/BusinessReducer/reducer";

const Bargraph = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(successBusiness(data));
  }, []);

  return (
    <div>
      <div className="h-[521px] border border-red-700 px-10 flex flex-col font-helvetica-neue">
        <div className="flex w-[564px] h-[64px] p-[20px] justify-between items-center flex-shrink-0">
          <p className="text-[14px] font-semibold">Emission/Revenue</p>
        </div>
        <BarChart />
      </div>
      {/* <LineChart /> */}
      {/* <DonoughtChart /> */}
    </div>
  );
};

export default Bargraph;
