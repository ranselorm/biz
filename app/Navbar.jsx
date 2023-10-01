import React from "react";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMenu,
} from "react-icons/ai";
const navlinks = [
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

const Navbar = () => {
  return (
    <nav className="bg-gray-200 w-full lg:h-[12vh] h-[8vh]  items-center flex shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>Logo</div>
          <div className="lg:flex items-center gap-x-6 hidden">
            {navlinks.map((link) => (
              <Link href={"#"}>{link.title}</Link>
            ))}
          </div>
          <div className="lg:flex items-center gap-x-4 hidden">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </div>
          <div className="lg:hidden">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
