import * as React from "react";
import FilterState from "./FilterState";
import FilterMagnitudeType from "./FilterMagnitudeType";

const Filters = ({ checkboxes, onCheckboxChange }) => {
  return (
    <section className="max-h-full flex flex-col justify-start gap-5 border-b-2 border-[#ededed] p-5 py-3">
      <FilterState />
      <FilterMagnitudeType
        checkboxes={checkboxes}
        onCheckboxChange={onCheckboxChange}
      />
    </section>
  );
};

export default Filters;
