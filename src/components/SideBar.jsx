import React, { useState } from "react";
const SideBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [analyzeOpen, setanalyzeOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="h-[1250px] w-[249px] bg-[#181818] text-gray-200 text-[15px]">
        <div className="flex items-center justify-center h-[103px] p-[15px]">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="h-[183px]  px-[15px] py-[15px] flex flex-col gap-2 ">
          <div className="w-[219px] h-[44px]  flex items-center">
            <p>DATA-IN</p>
          </div>
          <div
            onClick={() => setisOpen((prev=>!prev))}
            className="w-[219px] h-[44px]  flex items-center relative focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
          >
            <div className="flex items-center gap-1 ">
              <img src="/images/settings.svg" alt="" />
              <p>Energy</p>
              <img src="/images/dropdown2.svg" alt="" />
            </div>
          </div>
          {isOpen && (
            <div
              className="absolute z-50 mt-24 bg-white rounded-md shadow-lg"
              aria-labelledby="energy-dropdown"
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Action
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Another action
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Something else here
              </a>
            </div>
          )}
          <div
            onClick={() => setanalyzeOpen((prev=>!prev))}
            className=" w-[219px] h-[44px]  flex items-center relative focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
          >
            <div className="flex items-center gap-1">
              <img src="/images/drops.svg" alt="" />
              <p>Water and Effluents</p>
              <img src="/images/dropdown2.svg" alt="" />
            </div>
          </div>
          {analyzeOpen && (
            <div
              className="absolute z-50 mt-40 bg-white rounded-md shadow-lg"
              aria-labelledby="energy-dropdown"
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Action
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Another action
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Something else here
              </a>
            </div>
          )}
        </div>
        <div className="h-[183px]  px-[15px] py-[15px] flex flex-col gap-2">
          <div className="w-[219px] h-[44px]  flex items-center text-gray-300">
            <p>ANALYZE</p>
          </div>
          <div className="w-[219px] h-[44px]  flex items-center">
            <div className="flex items-center gap-1">
              <img src="/images/settings.svg" alt="" />
              <p>Energy</p>
              <img src="/images/dropdown2.svg" alt="" />
            </div>
          </div>
          <div className="w-[219px] h-[44px]  flex items-center">
            <div className="flex items-center gap-1">
              <img src="/images/dustbin.svg" alt="" />
              <p>Water and Effluents</p>
              <p className="text-green-600">(beta)</p>
            </div>
          </div>
        </div>
        <div className="h-[183px]  px-[15px] py-[15px] flex items-center justify-center gap-2">
          <div className="w-[187px] h-[50px] bg-[#02AB6C] rounded-lg flex justify-center items-center">
            <p>Open Help Centre</p>
          </div>
        </div>
      </div>
      <div className="h-[48px]  bg-[#02AB6C] text-white font-semibold p-4 flex items-center justify-center">
        <div className="flex gap-2 items-center">
          <p className="text-sm">POWERED BY</p>

          <h1 className="text-xl">Longsight</h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
