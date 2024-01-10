import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterBusiness,
  successBusiness,
} from "../redux/BusinessReducer/reducer";

const TimeLine = () => {
  const [dates, setdates] = useState({
    min: "",
    max: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdates((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (dates.min && dates.max) {
      dispatch(filterBusiness(dates));
    }
  }, [dates]);

  return (
    <div className="flex items-center justify-end h-[32px] px-[20px] flex-shrink-0 cursor-pointer">
      <div className="inline-flex h-[32px] px-[12px] py-[10px] justify-center items-center gap-[10px] flex-shrink-0 border-2 border-green-500 rounded-lg">
        <div className="text-black  text-[12px] font-normal gap-[10px] flex items-center ">
          <p>Show Timeline: </p>
          <input
            value={dates.min}
            type="month"
            className="text-[#02AB6C] border-none outline-none bg-transparent"
            name="min"
            onChange={handleChange}
          />
          <span>to</span>
          <input
            value={dates.max}
            type="month"
            className="text-[#02AB6C] border-none outline-none bg-transparent"
            name="max"
            onChange={handleChange}
          />
          <img
            src="/images/timelineVector.svg"
            className="w-[7.21px] h-[4.6px]"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
