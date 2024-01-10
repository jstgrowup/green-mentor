import React from "react";
import TableHeader from "./TableHeader";
import { useSelector } from "react-redux";
import TableBody from "./TableBody";

const Table = () => {
  const { dataGroupedByMonth } = useSelector((store) => store.business);
  

  return (
    <div className="w-[610px] h-[471px] overflow-y-scroll border border-gray-400 rounded-lg bg-white">
      <div className="w-full h-[48px]  flex justify-between items-center p-[20px]">
        <div className="w-[120px] h-[19px] flex items-center text-[16px] justify-between font-semibold">
          <p>Supplier wise</p>
          <img src="/images/Vector4.svg" alt="" />
        </div>
        <div className="w-[111px] h-[27px] border flex justify-between p-2 items-center font-semibold text-[14px] rounded-lg ">
          <div className="w-[32px] h-[32px] pt-[9px] pr-[8px]">
            <img src="/images/excel.svg" alt="" />
          </div>
          <div>
            <p>Download</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <TableHeader content={"Month"} />
        <TableHeader content={"Emissions"} />
        <TableHeader content={"RE"} />
        <TableHeader content={"YOYREChange"} />
      </div>
      {dataGroupedByMonth.map(
        ({
          Emissions,
          ExactDate,
          Month,
          RevenueToEmissionsRatio,
          YOYREChange,
        }) => {
          return (
            <div className="flex font-semibold">
              <TableBody content={ExactDate} />
              <TableBody content={Emissions} />
              <TableBody content={RevenueToEmissionsRatio} />
              <TableBody content={YOYREChange} />
            </div>
          );
        }
      )}
    </div>
  );
};

export default Table;
