import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, github, linkedin, leetcode } from "../assets";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center 
      py-5 fixedntop-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // going to keep track of where we are currently on the page
            window.scrollTo(0, 0); // scroll to top of the page
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Vamsi Krishna Pamulapati &nbsp;
            <span className="sm:block hidden">
              {/* Can add gitlab linkedin and other website urls */}
              <div className="w-10 h-13 object-contain">
                <div
                  onClick={() => window.open("https://github.com/vamsikrishna2127", "_blank")}
                  className="w-12 h-13 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="Github"
                    className="w-1/2 h-1/2"
                    object-contain
                  />
                </div>
              </div>
            </span>
            <span className="sm:block hidden">
            <div className="w-10 h-13 object-contain">
              <div
                  onClick={() => window.open("https://www.linkedin.com/in/vamsi-krishna-pamulapati/", "_blank")}
                  className="w-12 h-13 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-1/2 h-1/2"
                    object-contain
                  />
                </div>
              </div>
            </span>
            <span className="sm:block hidden">
            <div className="w-10 h-13 object-contain">
              <div
                  onClick={() => window.open("https://leetcode.com/u/Vamsi_Krishna_21/", "_blank")}
                  className="w-12 h-13 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={leetcode}
                    alt="Leetcode"
                    className="w-1/2 h-1/2"
                    object-contain
                  />
                </div>
              </div>
            </span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          ></img>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
