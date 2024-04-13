import * as React from "react";

const FilterMagnitudeType = ({ checkboxes, onCheckboxChange }) => {
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    onCheckboxChange(id, checked);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">Magnitude Type</h2>
      <section className="flex">
        <div className="flex flex-col gap-2 w-1/2">
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="mg_mw"
              type="checkbox"
              value=""
              checked={checkboxes.mg_mw}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="mg_mw" className="w-full hover:cursor-pointer">
              MW
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="mg_md"
              type="checkbox"
              value=""
              checked={checkboxes.mg_md}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="mg_md" className="w-full hover:cursor-pointer">
              MD
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="mg_ml"
              type="checkbox"
              value=""
              checked={checkboxes.mg_ml}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="mg_ml" className="w-full hover:cursor-pointer">
              ML
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="mg_ms"
              type="checkbox"
              value=""
              checked={checkboxes.mg_ms}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="mg_ms" className="w-full hover:cursor-pointer">
              MS
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="mg_me"
              type="checkbox"
              value=""
              checked={checkboxes.mg_me}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="mg_me" className="w-full hover:cursor-pointer">
              ME
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="mg_mi"
              type="checkbox"
              value=""
              checked={checkboxes.mg_mi}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="mg_mi" className="w-full hover:cursor-pointer">
              MI
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="mg_mb"
              type="checkbox"
              value=""
              checked={checkboxes.mg_mb}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="mg_mb" className="w-full hover:cursor-pointer">
              MB
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="mg_mlg"
              type="checkbox"
              value=""
              checked={checkboxes.mg_mlg}
              onChange={handleCheckboxChange}
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="mg_mlg" className="w-full hover:cursor-pointer">
              MLG
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterMagnitudeType;
