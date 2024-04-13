// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Profile from "./Profile";
import Filters from "./Filters";
import Magnitude from "./Magnitude";

const Sidebar = () => {
  const [checkboxes, setCheckboxes] = React.useState({
    mg_mw: false,
    mg_md: false,
    mg_ml: false,
    mg_ms: false,
    mg_me: false,
    mg_mi: false,
    mg_mb: false,
    mg_mlg: false,
  });

  const handleCheckboxChange = (id, checked) => {
    setCheckboxes({
      ...checkboxes,
      [id]: checked,
    });
  };

  return (
    <section className="flex flex-col justify-start max-w-80 w-1/2 border-[#ededed] border-r-2 min-h-full">
      <Profile />
      <Filters
        checkboxes={checkboxes}
        onCheckboxChange={handleCheckboxChange}
      />
      <Magnitude checkboxes={checkboxes} />
    </section>
  );
};

export default Sidebar;
