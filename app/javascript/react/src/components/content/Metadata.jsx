// eslint-disable-next-line no-unused-vars
import * as React from "react";

const Metadata = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between px-5 py-2">
        <div className="text-lg font-bold">Showing 234 results</div>
        <div>
          <button
            id="wea"
            data-dropdown-toggle="putadon"
            data-dropdown-trigger="click"
            className="bg-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between"
            type="button"
          >
            Latest
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="putadon"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-fit border-2"
          >
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="wea">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Latest
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Oldest
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Strongest
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Weakest
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metadata;
