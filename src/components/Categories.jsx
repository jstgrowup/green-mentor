import React from "react";
import IndividualCategory from "./IndividualCategory";

const Categories = () => {
  return (
    <div className="flex justify-between w-[946px] ml-[60px]">
      <IndividualCategory
        title="Current Year Emissions"
        description={"contribution to Scope3"}
        YOY={"7.6%"}
        chemical={"CO₂e"}
        chemicalAmount={"39,699"}
        borderColor={"red"}
      />
      <IndividualCategory
        title="Revenue to emission ratio"
        borderColor={"#FFC400"}
        chemicalAmount={"136"}
        YOY={"3.6%"}


      />
      <IndividualCategory
        title="Category-1"
        description={"contribution to Scope3"}
        YOY={"7.6%"}
        chemical={"of Scope3"}
        chemicalAmount={"32%"}
        borderColor={"#3BB85E"}
      />
      <div className="w-[156px] h-[138px]  bg-mygreen rounded-lg p-[18px] flex flex-col items-center text-white ">
        <div className="w-[116px] h-[36px] ">
          <p className="text-sm">Total number of reached suppliers</p>
        </div>
        <div className="w-[77px] h-[54px] text-[46px] font-semibold flex justify-center ">143</div>
      </div>
    </div>
  );
};

export default Categories;
