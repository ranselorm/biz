import React from "react";
import Link from "next/link";
import { AiOutlineCode, AiOutlineMobile } from "react-icons/ai";
import { TbBrandAirtable } from "react-icons/tb";
import { HiDesktopComputer } from "react-icons/hi";

const services = [
  {
    title1: "Web",
    title2: "Development",
    icon: <AiOutlineCode />,
  },
  {
    title1: "Mobile App",
    title2: "Development",
    icon: <AiOutlineMobile />,
  },
  {
    title1: "Graphic Designing",
    // title2: "Design",
    icon: <HiDesktopComputer />,
  },
  {
    title1: "Brand Design",
    icon: <TbBrandAirtable />,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-800 bg-cover text-white py-[100px] lg:px-[100px] pb-[200px] w-full">
      <div className="flex items-center flex-col justify-center lg:flex-row">
        <div className="lg:w-4/6 px-5 lg:px-0 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-x-2 justify-center flex-col-reverse gap-y-3 lg:gap-y-0 lg:flex-row">
            <div className="h-[2px] w-[50px] bg-[#6CB4EE]" />
            <span className="text-sm">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl font-semibold w-full mt-[30px] text-center lg:text-left">
            <span className="mr-2 text-[#6CB4EE]">Services</span>We Can <br />
            Help You With!
          </h2>
          <p className="my-10 text-center text-[18px] lg:text-[16px] lg:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            alias quis nemo. Quia quas quasi fugiat dolore, architecto quibusdam
          </p>

          <Link
            href="/services"
            className="text-[14px] bg-[#6CB4EE] px-8 py-3 rounded-full lg:flex items-center gap-x-3 text-white font-bold hidden"
          >
            DISCOVER MORE
          </Link>
        </div>
        <div className="lg:w-5/6 px-3 lg:px-0 flex justify-center flex-wrap gap-6">
          {services.map((service, index) => (
            <div
              className="lg:w-[240px] w-full  h-[250px] lg:h-[200px] bg-black/40 rounded-[40px] flex items-center justify-center flex-col text-[22px] lg:text-[18px] text-center"
              key={index}
            >
              <span className="text-[50px] text-[#6CB4EE] mb-[20px]">
                {service.icon}
              </span>
              {service.title1}
              <br />
              {service.title2}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute bg-black opacity-[90%] inset-0 flex items-center justify-center z-1" /> */}
    </section>
  );
};

export default Services;
