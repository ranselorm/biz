import React from "react";

import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMenu,
} from "react-icons/ai";
const links = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/about",
  },
  {
    title: "Our Works",
    path: "/portfolio",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full h-[50vh] bg-banner bg-contain bg-center px-5 lg:px-20 flex items-center">
      <div className="absolute bg-black opacity-[95%] inset-0" />

      <main className="relative z-10 text-white flex flex-col items-center justify-between lg:flex-row w-full">
        <div className="lg:w-2/6">
          <p className="mb-4 text-[14px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus accusamus inventore at dicta nihil explicabo sapiente
            dolorem nemo sunt architecto cum quidem iure esse tenetur sint,
            iste, mollitia illo nisi!
          </p>
          <div className="text-[#ff4f30] text-[23px] flex items-center gap-x-4">
            <AiOutlineFacebook className="cursor-pointer" />
            <AiOutlineInstagram className="cursor-pointer" />
            <AiOutlineTwitter className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:w-4/6 w-full">
          <div className="flex-1 flex justify-center flex-col lg:items-center">
            <h2 className="text-[18px] mb-4 mr-[24px]">Links</h2>
            <ul className="flex flex-col justify-start items-start gap-y-2">
              {links.map((link, index) => (
                <Link href={link.path} key={index} className="text-[14px]">
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex flex-col lg:start">
            <h2 className="text-[18px] mb-4">Contact Information</h2>
            <div>
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
