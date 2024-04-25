import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialIcons = () => {
  const [openSocial, setOpenSocial] = useState(false);

  return (
    <>
      <div className="social-icons flex flex-col top-[35%] left-0   fixed z-50 ">
        <ul className="flex flex-col">
          <li
            onClick={() => setOpenSocial((prev) => !prev)}
            className={` flex justify-between items-center w-48 h-14  bg-slate-800 px-3   sm:hidden rounded-r-full  ease-out duration-300 ${
              openSocial ? "ml-[0px]" : "ml-[-145px]"
            }`}
          >
            <span className="text-white flex justify-between text-lg items-center  w-full">
              Contact with
              {openSocial ? (
                <RxDoubleArrowLeft
                  className={`   animate-wiggle  `}
                  size={30}
                />
              ) : (
                <RxDoubleArrowRight
                  className={`   animate-wiggle `}
                  size={30}
                />
              )}
            </span>
          </li>
          <li
            className={` flex justify-between items-center w-40 h-14  bg-slate-800 px-4  sm:ml-[-105px] hover:ml-[0px] ease-out duration-300 ${
              openSocial ? "ml-[0px]" : "ml-[-165px]"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/theninjan/"
              target="niru"
              className="text-white flex justify-between items-center  w-full"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className={` flex justify-between items-center w-40 h-14  bg-slate-800 px-4  sm:ml-[-105px] hover:ml-[0px] ease-out duration-300 ${
              openSocial ? "ml-[0px]" : "ml-[-165px]"
            }`}
          >
            <a
              href="https://github.com/TheNinjan"
              target="ninju"
              className="text-white flex justify-between items-center  w-full"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li
            className={` flex justify-between items-center w-40 h-14  bg-slate-800 px-4  sm:ml-[-105px] hover:ml-[0px] ease-out duration-300 ${
              openSocial ? "ml-[0px]" : "ml-[-165px]"
            }`}
          >
            <a
              href="mailto:theninjanofficial@gmail.com"
              target="niru"
              className="text-white flex justify-between items-center  w-full"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className={` flex justify-between items-center w-40 h-14  bg-slate-800 px-4  sm:ml-[-105px] hover:ml-[0px] ease-out duration-300 ${
              openSocial ? "ml-[0px]" : "ml-[-165px]"
            }`}
          >
            <a
              href="https://drive.google.com/file/d/1u37IAVwxSMePvsodyyOo9abco07pUoJo/view?usp=sharing"
              target="niru"
              className="text-white flex justify-between items-center  w-full"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialIcons;
