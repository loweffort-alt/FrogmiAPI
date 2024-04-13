// eslint-disable-next-line no-unused-vars
import * as React from "react";

const Navbar = () => {
  return (
    <section className="w-full bg-white text-lg flex justify-between text-black items-center pt-2 pb-1 px-10">
      <div>Icon</div>
      <div className="flex items-center gap-10 font-medium text-[#c4c6cd]">
        <h2 className="text-black transition duration-150 ease:out hover:cursor-pointer hover:text-black hover:ease-in">
          Overview
        </h2>
        <h2 className="transition duration-150 ease:out hover:cursor-pointer hover:text-black hover:ease-in">
          Live seismograph
        </h2>
        <h2 className="transition duration-150 ease:out hover:cursor-pointer hover:text-black hover:ease-in">
          History
        </h2>
        <h2 className="transition duration-150 ease:out hover:cursor-pointer hover:text-black hover:ease-in">
          Reported
        </h2>
      </div>
      <button
        type="button"
        className="text-white bg-blue-600 hover:bg-blue-950 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Load Data
      </button>
    </section>
  );
};

export default Navbar;
