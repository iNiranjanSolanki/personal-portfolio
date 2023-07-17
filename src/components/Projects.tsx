import { Project_data } from "@/ulits";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <>
      <section
        id="project"
        className=" bg-gradient-to-r from-slate-100 via-[#e5eaff] to-slate-100  "
      >
        <div className="emptydiv h-14 bg-gradient-to-r  from-[#000000] via-slate-900 to-[#06072b] mb-4"></div>

        <div className=" flex p-3 ">
          <h3 className=" bg-gradient-to-r from-slate-900 via-[#0b0b3a] to-[#000156] text-white text-3xl px-3 pr-10 ml-14 rounded-r-full rounded-tr-lg font-medium">
            Projects{" "}
          </h3>
        </div>

        <div className="text-gray-600 body-font">
          <div className=" px-5 py-16 mx-8 flex justify-center">
            <div className=" grid sm:grid-cols-2 md:grid-cols-2  text-center  justify-center items-center gap-14   ">
              {Project_data.map(({ project_name, src, href,vhref }, idx) => {
                return (
                  <div key={idx} className=" flex flex-col  ">
                    <a className="block relative h-48 rounded overflow-hidden hover:scale-105 ease-in duration-200">
                      <Image
                        alt="project"
                        className="object-fill object-center w-full h-full block"
                        src={src}
                        height={220}
                        width={220}
                      />
                    </a>
                    <div className="mt-2 flex justify-around">
                      <h2 className="text-slate-600 title-font text-xl font-medium">
                        {project_name}
                      </h2>
                      <a href={href} target="niru">
                        <button className="bg-black text-white px-3 rounded-full hover:text-black hover:bg-white border border-black ease-in duration-200">
                          View Code
                        </button>
                      </a>
                      <a href={vhref} target="niru">
                        <button className="bg-black text-white px-3 rounded-full hover:text-black hover:bg-white border border-black ease-in duration-200">
                          Visit 
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
