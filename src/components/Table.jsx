import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import { useSelector } from "react-redux";
import TableBody from "./TableBody";

const Table = () => {
  const { data } = useSelector((store) => store.business);
  
  const [loading, setloading] = useState(false);
  const [dataTable, setdataTable] = useState([]);
  useEffect(() => {
    setloading(true);
    const groupedData = data.reduce((result, entry) => {
      const monthKey = `${entry.Month}-${entry.Year}`;
      if (!result[monthKey]) {
        result[monthKey] = {
          Month: entry.Month,
          Emissions: 0,
          Revenue: 0,
          YOYREChange: 0,
        };
      }

      result[monthKey].Emissions += entry.Emissions;
      result[monthKey].Revenue += entry.Revenue;

      if (entry["YOYREChange"]) {
        const yoyREChange = parseFloat(entry["YOYREChange"].replace("%", ""));
        result[monthKey]["YOYREChange"] += yoyREChange;
      }

      return result;
    }, {});
    let tempgroupedData = [];
    for (const key in groupedData) {
      groupedData[key]["ExactDate"] = key;
      tempgroupedData.push(groupedData[key]);
    }

    const groupedArray = tempgroupedData.map((entry) => ({
      ...entry,
      RevenueToEmissionsRatio: Number(
        (entry.Revenue / entry.Emissions).toFixed(1)
      ),
    }));
   
    setloading(false);
    setdataTable(groupedArray);
  }, [data]);

  return (
    <div className="w-[610px] h-[471px] overflow-y-scroll border border-gray-300 rounded-lg bg-white">
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
      {loading ? (
        <h1>Loading</h1>
      ) : (
        dataTable.map(
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
        )
      )}
    </div>
  );
};

export default Table;
