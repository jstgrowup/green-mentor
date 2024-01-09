import React from "react";

const IndividualCategory = ({
  title,
  description,
  YOY,
  chemical,
  chemicalAmount,
  borderColor,
}) => {
  return (
    <div className="h-[134px] w-[250px] border  rounded-12  bg-white  p-5  rounded-lg shadow-xl">
      <div className="flex items-center">
        <p className="font-helvetica-neue text-[14px] font-normal">{title}</p>
        <div className="w-[14px] h-[14px] ">
          <img src="/images/information-line.svg" alt="" />
        </div>
      </div>
      <p className="text-opacity-67  font-Poppins text-[8px] italic  leading-normal py-2">
        {description}
      </p>

      <div
        className="w-fixed h-[40px] top-0 left-0 bg-white flex items-center border-l-8  border rounded-lg justify-around"
        style={{
          borderLeft: `9px solid ${borderColor}`,
          borderBottom: "1px light red",
        }}
      >
        <div className="text-md flex text-black font-semibold">
          <p>{chemicalAmount}</p>
          <p>{chemical}</p>
        </div>
        <div className="flex flex-col w-[77px] h-[28px] justify-center items-center flex-shrink-0 text-opacity-67 text-center text-HelveticaNeue text-[11px]  leading-normal border text-custom-red font-semibold">
          <p>{YOY} YOY</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualCategory;
