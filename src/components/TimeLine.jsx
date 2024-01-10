import React from "react";

const TimeLine = () => {
  return (
    <div className="flex items-center justify-end h-[32px] px-[20px] flex-shrink-0 ">
      <div className="inline-flex h-[32px] px-[12px] py-[10px] justify-center items-center gap-[10px] flex-shrink-0 border-2 border-green-500 rounded-lg">
        <div className="text-white font-[HelveticaNeue] text-[12px] font-normal gap-[10px] flex items-center">
          <p className="text-black">Show Timeline: </p>
          <input
            type="month"
            className="text-[#02AB6C] border-none outline-none bg-transparent"
            id="start-month"
            name="start-month"
            min="2022-01"
            max="2023-12"
          />
          <span className="text-white">to</span>
          <input
            type="month"
            className="text-[#02AB6C] border-none outline-none bg-transparent"
            id="end-month"
            name="end-month"
            min="2022-01"
            max="2023-12"
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
