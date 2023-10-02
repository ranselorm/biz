import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const Consult = () => {
  return (
    <div className="-mt-[80px] relative z-10">
      <div className="lg:px-[100px] px-[50px] lg:max-w-[1100px] w-full lg:h-[150px] h-[400px] bg-[#ff4f30] mx-auto rounded-3xl flex items-center shadow-md">
        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between items-center w-full">
          <div className="flex gap-x-6 mr-8">
            <div className="w-[60px] h-[60px] bg-transparent border border-white rounded-full flex items-center justify-center">
              <BiPhoneCall className="text-white text-4xl font-black animate-pulse" />
            </div>
            <div className="text-white">
              <p className="text-[16px]">GET A FREE CONSULTATION</p>
              <p className="text-4xl font-bold">+23355444000</p>
            </div>
          </div>
          <div className="w-[2px] h-[100px] bg-red-700 hidden lg:flex" />
          <h4 className="text-sm mx-8 w-full font-semibold text-center text-white lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            iste doloremque velit. Quasi totam earum
          </h4>
          <button className="bg-white px-[50px] py-3 rounded-full w-full uppercase">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consult;
