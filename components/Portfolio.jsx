import React from "react";
import Button from "./Button";
import Image from "next/image";

const portfolio = [
  {
    name: "Test Project",
    image: "/web.jpg",
  },
  {
    name: "Test Project",
    image: "/web.jpg",
  },
  {
    name: "Test Project",
    image: "/web.jpg",
  },
  {
    name: "Test Project",
    image: "/web.jpg",
  },
  {
    name: "Test Project",
    image: "/web.jpg",
  },
  {
    name: "Test Project",
    image: "/web.jpg",
  },
];

const Portfolio = () => {
  return (
    <section className="h-full py-[20px]">
      <div>
        <div className="text-center">
          <Button text="OUR PORTFOLIO" styles="mx-auto" />
          <div className="px-10">
            <h2 className="text-[40px] font-semibold">
              <span className="text-[#ff4f30] mr-2">Projects</span>We Completed
            </h2>
            <p className="text-center py-2">
              Lorem ipsum dolor sit amet consectetur. Magni perspiciatis quae.
            </p>
          </div>
        </div>
        <main className="w-full mt-[70px]">
          <div className="container mx-auto flex items-center justify-center px-[20px] flex-wrap gap-10">
            {portfolio.map((port, index) => (
              <div
                className="relative w-[350px] h-[350px] rounded-2xl overflow-hidden"
                key={index}
              >
                <Image src={port.image} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Portfolio;
