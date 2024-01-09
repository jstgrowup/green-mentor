import React from "react";

const TimeLine = () => {
  return (
    <div className="flex items-center justify-end w-[1200px] h-[32px] px-[20px] flex-shrink-0 ">
      <div className="inline-flex h-[32px] px-[12px] py-[10px] justify-center items-center gap-[10px] flex-shrink-0 border border-black">
        <div className="text-white font-[HelveticaNeue] text-[12px] font-normal border gap-[10px] flex items-center">
          <p className="text-black">Show Timeline: </p>
          <span className="text-[#02AB6C]">Jan'22 - Dec'23</span>
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
