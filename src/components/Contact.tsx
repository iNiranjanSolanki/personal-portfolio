import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className=" bg-gradient-to-r from-slate-100 via-[#e5eaff] to-slate-100 h-[90vh] "
      >
        <div className=" flex p-3 ">
          <h3 className=" bg-gradient-to-r from-slate-900 via-[#000000] to-black text-white text-3xl px-3 pr-10 ml-14 rounded-r-full rounded-tr-lg font-medium ">
            Contact{" "}
          </h3>
        </div>

        <div className="flex justify-center items-center  h-[90%] ">
          <form
            action="https://getform.io/f/39da0844-ddf2-4423-8cea-212c7789628f"
            method="POST"
            className="flex flex-col gap-4 w-[70%] sm:w-[40%] border border-slate-300 bg-gradient-to-t  from-slate-300 via-slate-400 to-slate-300 p-10 rounded-md shadow-red-500"
          >
            <input
              type="text"
              name="name"
              id=""
              placeholder="Your Name"
              className="relative block w-full appearance-none rounded-md  border border-slate-400 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#06072b] focus:outline-none focus:ring-[#06072b] sm:text-sm"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              className="relative block w-full appearance-none rounded-md  border border-slate-400 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#06072b] focus:outline-none focus:ring-[#06072b] sm:text-sm"
            />
            <textarea
              name="message"
              id=""
              cols={30}
              rows={5}
              placeholder="Tell me something"
              className="relative block w-full appearance-none rounded-md  border border-slate-400 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#06072b] focus:outline-none focus:ring-slate-300 sm:text-sm"
            ></textarea>

            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-200  py-2 px-4 text-sm font-medium text-black hover:text-white hover:bg-slate-700 focus:outline-none "
            >
              Let me know
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
