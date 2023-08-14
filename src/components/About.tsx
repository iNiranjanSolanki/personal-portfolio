import Image from "next/image";
import React from "react";
import { SiJavascript, SiSpringboot } from "react-icons/si";

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
              Creating dynamic websites and powerful web <br /> applications,
              with ReactJs,NextJS ,HTML ,CSS.
            </span>
            <span className="hidden ">
              Mastering the Art of Web Development from Front to Back
            </span>

            <div className="flex  justify-center gap-3 mt-4 bg-slate-800 p-2 pr-5 w-[75%] rounded-full">
            <div className="box flex justify-start items-center  ease-in duration-200 hover:scale-125    ">
                <Image src="/svg/reactJS.svg" width={30}  height={30} alt="" />
              </div>
              <div className="box flex justify-start items-center    ease-in duration-200 hover:scale-125   ">
                <Image src="/svg/nextjs.svg" width={45}  height={45} alt="" />
              </div>
              <div className="box flex justify-start items-center     ">
                <SiJavascript className=" w-8 h-8 text-[#eede4cd6] ease-in duration-200 hover:scale-125 hover:text-[#eede4c] bg-black" />
              </div>
              <div className="box flex justify-start items-center     ">
                <SiSpringboot className=" w-8 h-8 hover:text-[#4faf45] ease-in duration-200 hover:scale-125 text-[#50af45db] " />
              </div>
              
              <div className="box flex justify-start items-center  ease-in duration-200 hover:scale-125    ">
                <Image src="/svg/hibernate.svg" width={30}  height={30} alt="" />
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
