import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[64px] px-[20px] flex-shrink-0 border">
      <div className="flex items-center h-[64px] gap-[12px]">
        <div className="flex w-[32px] h-[32px] justify-center items-center gap-[10px]">
          <div className="w-[20px] h-[20px] flex-shrink-0 bg-white border border-black">
            <img src="/images/navbarleft.svg" alt="My SVG" />
          </div>
        </div>
        <p className="text-black font-[HelveticaNeue] text-[16px] font-normal">
          Category-1
        </p>
      </div>
      <div className="flex items-center h-[56px] px-[8px] py-[16px] gap-[10px] border border-black">
        <div className="w-[32px] h-[32px] rounded-full">
          <img src="/images/Ellipse8.svg" alt="My image" />
        </div>
        <div className="w-[24px] h-[24px]">
          <img src="/images/dropdown.svg" alt="my image" />
        </div>
        <div className="flex w-[40px] h-[40px] p-[10px] justify-center items-center gap-[10px] rounded-8 rounded-8 border border-gray-300  bg-white">
          <div className="w-[24px] h-[24px] flex-shrink-0 flex justify-center items-center">
            <img src="/images/Vector.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
