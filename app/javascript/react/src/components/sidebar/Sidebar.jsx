// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Profile from "./Profile";
import Filters from "./Filters";
import Magnitude from "./Magnitude";

const Sidebar = () => {
  return (
    <section className="flex flex-col justify-start max-w-80 w-1/2 border-[#ededed] border-r-2 min-h-full">
      <Profile />
      <Filters />
      <Magnitude />
    </section>
  );
};

export default Sidebar;
