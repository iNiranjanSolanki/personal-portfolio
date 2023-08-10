import Head from "next/head";
import React, { useState } from "react";
import { CgMenuLeftAlt, CgShare } from "react-icons/cg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <Head>
        <title>The Ninjan</title>
        <meta
          name="description"
          content="ThNinjan | a professional Backend web developer with Spring boot | Hibernate | Java "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        
        <meta name="subject" content="TheNinjan Portfolio" />
        <meta name="copyright" content="TheNinjan " />
        <meta name="abstract" content="TheNinjan " />
        <meta name="topic" content="TheNinjan  portfolio" />
        <meta
          name="summary"
          content="This is My(TheNinjan's) Portfolio Website"
        />
        <meta name="author" content="TheNinjan" />
        <meta name="designer" content="TheNinjan" />
        <meta name="owner" content="TheNinjan" />
        <meta name="url" content="https://theninjan.vercel.app/" />
        <meta name="category" content="Fullstack developer | Portfolio" />
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
                TheNinjan
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
