import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Clientelle from "./Clientelle";

const About = () => {
  return (
    <section className="py-[100px]">
      <div className="container mx-auto lg:px-[40px] mb-[80px]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="relative w-full lg:w-2/4 h-[500px] mb-[50px] lg:mb-0">
            <Image src="/dev.jpg" alt="" fill className="object-cover" />
          </div>
          <article className="lg:w-2/4 px-4 flex flex-col items-start justify-center pl-8">
            <Button text="ABOUT US" styles="mx-auto lg:mx-0" />
            <h2 className="my-[20px] text-3xl font-bold text-center lg:text-left">
              <span className="mr-1 text-[#ff4f30]">Welcome</span>To [Company
              Name]
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              facilis quisquam animi maxime reprehenderit illum sed nostrum
            </p>
            <div className="my-5">
              <p className="flex items-center gap-x-2 font-semibold my-2">
                <AiOutlineCheckCircle className="text-[#ff4f30] text-xl" />
                Facere facilis quisquam animi maxime reprehenderit illum sed
              </p>
              <p className="flex items-center gap-x-2 font-semibold my-2">
                <AiOutlineCheckCircle className="text-[#ff4f30] text-xl" />
                Facere facilis quisquam animi maxime reprehenderit illum sed
              </p>
              <p className="flex items-center gap-x-2 font-semibold my-2">
                <AiOutlineCheckCircle className="text-[#ff4f30] text-xl" />
                Facere facilis quisquam animi maxime reprehenderit illum sed
              </p>
              <p className="flex items-center gap-x-2 font-semibold my-2">
                <AiOutlineCheckCircle className="text-[#ff4f30] text-xl" />
                Facere facilis quisquam animi maxime reprehenderit illum sed
              </p>
              <p className="flex items-center gap-x-2 font-semibold my-2">
                <AiOutlineCheckCircle className="text-[#ff4f30] text-xl" />
                Facere facilis quisquam animi maxime reprehenderit illum sed
              </p>
            </div>
            <Link
              href="#"
              className="text-[14px] bg-[#ff4f30] w-full lg:w-[30%] px-8 py-3 rounded-full flex items-center justify-center gap-x-3 text-white font-semibold"
            >
              MORE
            </Link>
          </article>
        </div>
      </div>
      {/* <Clientelle /> */}
    </section>
  );
};

export default About;
