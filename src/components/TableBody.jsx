import React from "react";

const TableBody = ({ content }) => {
  return (
    <div className="h-[56px] w-[161px] px-[16px] py-[8px] border flex items-center justify-center text-[14px]">
      <p>{content}</p>
    </div>
  );
};

export default TableBody;
