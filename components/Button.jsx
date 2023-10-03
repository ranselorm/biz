import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-[12px] bg-white px-4 py-2 rounded-full flex items-center gap-x-3 text-black shadow-2xl">
      <div className="w-[12px] h-[12px] bg-[#ff4f30] rounded-full" />
      {text}
      <div className="w-[12px] h-[12px] bg-[#ff4f30] rounded-full" />
    </button>
  );
};

export default Button;
