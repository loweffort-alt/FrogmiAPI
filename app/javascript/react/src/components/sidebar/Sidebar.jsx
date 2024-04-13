// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Profile from "./Profile";
import Filters from "./Filters";
import Magnitude from "./Magnitude";

const Sidebar = () => {
  return (
    <section className="flex flex-col w-1/2 border-[#ededed] border-r-4 p-5 h-full">
      <Profile />
      <Filters />
      <Magnitude />
      <button
        type="button"
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
      >
        Submit
      </button>
    </section>
  );
};

export default Sidebar;
