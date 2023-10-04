import React from "react";
import Button from "./Button";
import Image from "next/image";

const teams = [
  {
    name: "Selorm",
    image: "/t1.jpg",
    position: "Software Engineer",
  },
  {
    name: "Patrick",
    image: "/t2.jpg",
    position: "UI/UX Engineer",
  },
  {
    name: "Julie",
    image: "/t3.jpg",
    position: "Software Developer",
  },
  {
    name: "Mariah",
    image: "/t4.jpg",
    position: "Designer",
  },
];

const Team = () => {
  return (
    <section className="h-full py-[80px] bg-gray-100 mt-[60px] relative">
      <div className="text-center relative z-10">
        <Button text="OUR TEAM" styles="mx-auto" />
        <div className="px-10">
          <h2 className="text-[40px] font-semibold">
            <span className="text-[#ff4f30] mr-2">Team</span>
            Members
          </h2>
          <p className="text-center py-2">
            Lorem ipsum dolor sit amet consectetur. Magni perspiciatis quae.
          </p>
        </div>
      </div>
      <main className="w-full mt-[70px]">
        <div className="container mx-auto flex items-center justify-center px-[20px] flex-wrap gap-10">
          {teams.map((team, index) => (
            <div
              className="relative lg:w-[250px] w-full h-[320px] rounded-2xl overflow-hidden shadow-xl"
              key={index}
            >
              <div className="h-2/3 w-full overflow-hidden">
                {/* <Image
                  src={port.image}
                  alt=""
                  fill
                  className="object-cover h-full"
                /> */}
                <img
                  src={team.image}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="text-center mt-5">
                <h3 className="font-semibold text-[20px] text-[#ff4f30]">
                  {team.name}
                </h3>
                <span>{team.position}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Team;
