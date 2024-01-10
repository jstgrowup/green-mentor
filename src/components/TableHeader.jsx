import React from "react";

const TableHeader = ({ content }) => {
  return (
    <div className="w-[161px] h-[38px] py-[16px] px-[8px] border flex items-center justify-center bg-gray-100 text-gray-600 text-[14px] font-bold">
      <p>{content}</p>
    </div>
  );
};

export default TableHeader;
