import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const Consult = () => {
  return (
    <div className="-mt-[80px] z-50">
      <div className="px-[100px] max-w-[1100px] w-full h-[150px] bg-[#6CB4EE] mx-auto rounded-3xl flex  items-center">
        {/* <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[65px] h-[65px] bg-transparent border border-white rounded-full flex items-center justify-center">
              <BiPhoneCall className="text-white text-4xl font-black animate-pulse" />
            </div>
            <div>
              <p>Text1</p>
              <p>Text2</p>
            </div>
          </div>
          <div>Line</div>
          <div>Para</div>
          <div>Button</div>
        </div> */}
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-x-6">
            <div className="w-[60px] h-[60px] bg-transparent border border-white rounded-full flex items-center justify-center">
              <BiPhoneCall className="text-white text-4xl font-black animate-pulse" />
            </div>
            <div>
              <p className="text-[16px]">GET A FREE CONSULTATION</p>
              <p className="text-4xl font-bold">+23355444000</p>
            </div>
          </div>
          <div className="w-[2px] h-[100px] bg-red-700" />
          <h4 className="text-sm max-w-2xl w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            iste doloremque velit. Quasi totam earum
          </h4>
          <button className="bg-white px-[50px] py-3 rounded-full uppercase">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consult;
