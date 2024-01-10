import React from "react";
import { DonoughtChart } from "../Chart";

const PieChart = () => {
  return (
    <div className="w-[459px] h-[471px] ml-16 mb-[10px] border-gray-300 border rounded-lg bg-white ">
      <div className="w-full h-[64px] p-[20px] flex justify-between items-center ">
        <p className="text-[14px] font-semibold font-helvetica-neue">
          Emission by Supplier
        </p>
        <div className="h-[36px] gap-[2px] flex justify-center items-center border border-gray-300 rounded-xl shadow-md">
          <div className="p-[16px] flex items-center">
            <img src="/images/Vector2.svg" alt="vector2" />
          </div>
          <div className="p-[16px] flex items-center">
            <img src="/images/Vector3.svg" alt="vector3" />
          </div>
        </div>
      </div>
      <div className=" flex justify-center  items-center">
        <div className="w-[400px] h-[400.22px]  flex justify-center items-center">
          <DonoughtChart />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
