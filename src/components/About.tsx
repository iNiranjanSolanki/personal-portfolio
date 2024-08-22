import Image from "next/image";
import React from "react";
import { SiJavascript, SiRedux } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-gradient-to-t md:bg-gradient-to-r  from-[#000000] via-slate-900 to-[#06072b] "
      >
        <div className=" flex p-3 ">
          <h3 className=" bg-gradient-to-r from-slate-200 via-slate-50 to-slate-100 text-[#06072b] text-3xl px-3 pr-10 ml-14 rounded-r-full rounded-tr-lg font-medium">
            About{" "}
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center h-[90vh] gap-5">
          <div className="border-2 border-slate-800  rounded-bl-3xl  rounded-tr-3xl truncate  ">
            <Image width={200}  height={200} src="/Ninju_about.jpg" alt="" />
          </div>

          <div className="flex flex-col  ">
            <span className="text-slate-200 leading-3 font-medium">THE</span>
            <span className="text-4xl font-bold  leading-7 text-white">
              NIRANJAN SOLANKI
            </span>
            <span className="text-[#5a73fc] font-medium">
              Web Devoloper{" "}
            </span>
            <span className="text-slate-300 font-medium">
              {"Empowering digital experiences with dynamic websites and robust web applications, fueled by ReactJS, ExpressJS, NodeJS, and NextJS."}
            </span>
            <span className="hidden">
              Mastering the Art of Web Development from Front to Back
            </span>

            <div className="flex  justify-center gap-3 mt-4 bg-slate-800 p-2 pr-5 w-[75%] rounded-full">
            {/* mongodb */}
            <div className="box flex justify-start items-center  ease-in duration-200 hover:scale-125    ">
                <Image src="/svg/mongodb.svg" width={30}  height={30} alt="" />
              </div>
            {/* express */}
            <div className="box flex justify-start items-center  ease-in duration-200 hover:scale-125    ">
                <Image src="/svg/expressjs.svg" width={30}  height={30} alt="" />
              </div>
              {/* ReactJS */}
            <div className="box flex justify-start items-center  ease-in duration-200 hover:scale-125    ">
                <Image src="/svg/reactJS.svg" width={30}  height={30} alt="" />
              </div>
              {/* NodeJS */}
              <div className="box flex justify-start items-center     ">
                <DiNodejsSmall className=" w-8 h-8 hover:text-[#4faf45] ease-in duration-200 hover:scale-125 text-[#50af45db] " />
              </div>
              {/* NextJS */}
              <div className="box flex justify-start items-center    ease-in duration-200 hover:scale-125   ">
                <Image src="/svg/nextjs.svg" width={30}  height={30} alt="" className="" />
              </div>
              {/* Redux */}
              <div className="box flex justify-start items-center     ">
                <SiRedux className=" w-8 h-8 hover:text-[#7e57c9] ease-in duration-200 hover:scale-125 text-[#7e57c2] " />
              </div>
              {/* JAVASCRIPT */}
              <div className="box flex justify-start items-center     ">
                <SiJavascript className=" w-8 h-8 text-[#eede4cd6] ease-in duration-200 hover:scale-125 hover:text-[#eede4c] bg-black" />
              </div>
              {/* Typescript */}
              <div className="box flex justify-start items-center  ease-in duration-200 hover:scale-125    ">
                <Image src="/svg/typescript.svg" width={30}  height={30} alt="" />
              </div>
              
              
              

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
