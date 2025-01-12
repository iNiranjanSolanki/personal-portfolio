import Head from "next/head";
import React, { useState } from "react";
import { CgMenuLeftAlt, CgShare } from "react-icons/cg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Niranjan Solanki</title>
        <meta name="description" content="Niranjan Solanki | MERN Stack Developer | Expert in ReactJS, NextJS, NodeJS, MongoDB, ExpressJS, Tailwind CSS, JavaScript, and Redux. Build scalable web applications and dynamic user interfaces." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="subject" content="Niranjan Solanki - MERN Stack Developer Portfolio" />
        <meta name="copyright" content="Niranjan Solanki" />
        <meta name="abstract" content="Portfolio of Niranjan Solanki, a professional MERN Stack Developer." />
        <meta name="topic" content="MERN Stack Developer, Portfolio, Niranjan Solanki" />
        <meta name="summary" content="Niranjan Solanki | MERN Stack Developer specializing in ReactJS, NextJS, NodeJS, MongoDB, ExpressJS, Tailwind CSS, and Redux. Explore projects and services." />
        <meta name="author" content="Niranjan Solanki" />
        <meta name="designer" content="Niranjan Solanki" />
        <meta name="owner" content="Niranjan Solanki" />
        <meta name="url" content="https://theninjan.vercel.app/" />
        <meta name="category" content="MERN Stack Developer | Portfolio | Full Stack Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />

        <link rel="icon" href="/ninjan_fav.png" />
      </Head>

      <div className="navbar shadow-md flex justify-between  px-2 sm:px-4 h-16 sticky top-0 bg-gradient-to-b to-[#030419] from-black z-50">
        <div className="hamburger flex justify-center items-center text-3xl md:hidden">
          <CgMenuLeftAlt
            className={`text-white ${
              openMenu ? "rotate-180" : ""
            } ease-in duration-300`}
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>

        {/* mobile navbar menu  */}
        <div
          className={`absolute top-16 left-0 w-[100%]  transition  ease-in duration-300   bg-slate-900 md:hidden ${
            openMenu ? "" : "-translate-y-[150%]"
          }`}
        >
          <ul className=" flex flex-col  pt-0 pl-3 space-y-1  h-[35vh]  text-slate-300 font-normal text-2xl">
            <li></li>
            <Link to="hero" smooth={true} offset={-200} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>Home</li>
            </Link>
            <hr />
            <Link to="skill" smooth={true} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>Skill</li>
            </Link>
            <hr />
            <Link to="project" smooth={true} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>Project</li>
            </Link>
            <hr />
            <Link to="about" smooth={true} offset={50} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>Contact</li>
            </Link>
            <hr />
            <Link to="about" smooth={true} duration={1000}>
              {" "}
              <li onClick={() => setOpenMenu(false)}>About</li>
            </Link>
          </ul>
        </div>

        <div className="logo flex justify-center  items-center md:justify-start text-2xl   w-full ">
          <Link to="hero" smooth={true} offset={-200} duration={1000}>
            <div className="cursor-pointer bg-gradient-to-r from-[#b70159] to-[#750e40] px-2  rounded-tl-2xl rounded-br-2xl">
              <span className=" text-3xl text-white  font-bold ">
                Niranjan
              </span>
            </div>
          </Link>
          <div className="nav-items  hidden md:flex justify-end  h-[100%]  w-full  ml-5 ">
            <ul className="flex  items-end justify-center space-x-8  h-[100%] text-slate-400 text-lg font-medium">
              <Link to="hero" smooth={true} offset={-200} duration={1000}>
                {" "}
                <li
                  className={`hover:text-white ease-in  duration-200 cursor-pointer   `}
                >
                  Home
                </li>
              </Link>
              <Link to="skill" smooth={true} duration={1000}>
                {" "}
                <li className="hover:text-white ease-in duration-200  cursor-pointer">
                  Skills
                </li>
              </Link>
              <Link to="project" smooth={true} duration={1000}>
                {" "}
                <li className="hover:text-white ease-in duration-200 cursor-pointer">
                  Projects
                </li>
              </Link>
              <Link to="contact" smooth={true} offset={-70} duration={1000}>
                {" "}
                <li className="hover:text-white ease-in duration-200 cursor-pointer">
                  Contact
                </li>
              </Link>
              <Link to="about" smooth={true} offset={-63} duration={1000}>
                {" "}
                <li className="hover:text-white ease-in duration-200 cursor-pointer">
                  About
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
