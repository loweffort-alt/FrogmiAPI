import * as React from "react";

const Magnitude = () => {
  return (
    <>
      <div className="h-1/4">
        <h2 className="text-xl font-bold mb-5">Magnitude Scale</h2>
        <div className="relative mb-6">
          <label htmlFor="labels-range-input" className="sr-only">
            Labels range
          </label>
          <input
            id="labels-range-input"
            type="range"
            value="4"
            min="-1"
            max="10"
            className="w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-blue-500"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
            Min (-1)
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
            Max (10)
          </span>
        </div>
      </div>
    </>
  );
};

export default Magnitude;
