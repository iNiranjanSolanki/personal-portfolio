import Image from "next/image";
import React from "react";
import {
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiSpringboot,
} from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
const Technologies = () => {
  return (
    <>
      <section
        id="skill"
        className=" bg-gradient-to-r from-[#000000] via-slate-900 to-[#06072b] md:h-[90vh] "
      >
        <div className="emptydiv h-14 bg-gradient-to-r from-[#000000] via-slate-900 to-[#06072b] mb-4"></div>

        <div className=" flex p-3">
          <h3 className=" bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 text-[#0c0d2a] text-3xl px-3 pr-10 ml-14 rounded-r-full rounded-tr-lg font-medium">
            Technologies{" "}
          </h3>
        </div>

        <div className="flex justify-center items-center flex-col md:flex-row gap-4 mt-3">
          <div className="flex flex-col flex-wrap-reverse gap-4 w-[80%] md:w-[40%]">
             {/* MongoDB */}
             <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white h-16 p-2">
              <Image src="svg/mongodb.svg" width={50} height={50} alt="MongoDB" />
              <span className="text-2xl text-slate-50">MongoDB</span>
            </div>
            {/* ExpressJS */}
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white h-16 p-2">
              <Image src="svg/expressjs.svg" width={50} height={50} alt="java" />
              <span className="text-2xl text-slate-50">ExpressJS</span>
            </div>

            {/* ReactJS */}
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white  h-16 p-2">
            <Image src="svg/reactJS.svg" width={50} height={50} alt="" />
              <span className="text-2xl text-slate-50">RactJS</span>
            </div>

            {/*  NodeJS*/}            
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white h-16  p-2">
            <DiNodejs  className=" w-12 h-12 text-[#53d051]" />
              <span className="text-2xl text-slate-50">Node JS</span>
            </div>

            {/* MySQL */}
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white h-16 p-2">
              <Image src="svg/mysql.svg" width={50} height={50} alt="" />
              <span className="text-2xl text-slate-50">MySQL</span>
            </div>
            
            
          </div>

          <div className="flex flex-col flex-wrap-reverse gap-4 w-[80%] md:w-[40%]">

            {/* NextJS */}
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white h-16 p-2">
              <Image src="svg/nextjs.svg" width={50} height={50} alt="" className=""/>
              <span className="text-2xl text-slate-50">NextJS</span>
            </div>

            {/* ReduxToolkit */}
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white h-16 p-2">
              <SiRedux  className=" w-12 h-12 text-[#7e57c2]" />
              <span className="text-2xl text-slate-50">Redux Toolkit</span>
            </div>

            {/* JAVASCRIPT */}
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white h-16 p-2">
            <Image src="svg/typescript.svg" width={50} height={50} alt="" className=""/>
              <span className="text-2xl text-slate-50">TypeScript / JavaScript / HTML</span>
            </div>

            {/* TailwindCSS */}
            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white h-16 p-2">
            <Image src="svg/tailwindcss.svg" width={50} height={50} alt="" className=""/>
              <span className="text-2xl text-slate-50">TailwindCSS</span>
            </div>

            <div className="box flex justify-start items-center gap-3 border border-blue-50 text-white h-16 p-2">
              <FaGithub  className=" w-12 h-12" />
              <span className="text-2xl text-slate-50">GitHub</span>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
