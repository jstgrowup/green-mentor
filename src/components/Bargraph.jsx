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
    <div className="h-[521px] w-[1100px] border border-gray-300 pl-10 flex flex-col  ml-14 rounded-xl bg-white">
      <div className="flex w-[564px]  h-[64px]  justify-between items-center flex-shrink-0">
        <p className="text-[14px] font-semibold">Emission/Revenue</p>
      </div>
      <BarChart />
    </div>
  );
};

export default Bargraph;
