import React from "react";

const Footer = () => {
  return (
    <>
      <section>
        <footer className="text-gray-600 body-font bg-gradient-to-b to-slate-900 from-black ">
          <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <div className="cursor-pointer bg-gradient-to-r from-[#a50879]  to-[#571029] px-2  rounded-tl-2xl rounded-br-2xl">
                <span className=" text-2xl text-white  font-bold ">
                  Niranjan
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © 2023 -
              <a
                href="https://theninjan.vercel.app/"
                className="text-gray-200 ml-1"
                rel="noopener noreferrer"
                target="_blank"
              >
                Niranjan Solanki
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/niranjan_singh.1"
                target="niru"
                className="ml-3 text-gray-300"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/iniranjansolanki"
                target="niru"
                className="ml-3 text-gray-300"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
