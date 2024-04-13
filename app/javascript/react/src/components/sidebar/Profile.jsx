import * as React from "react";

const Profile = () => {
  return (
    <section className="flex flex-col gap-2 border-b-2 border-[#ededed] p-5 py-3">
      <div className="flex justify-between items-center hover:cursor-pointer">
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              style={{
                fill: "black",
                transform: "",
                filter: "drop-shadow(0 0 1.5px rgba(0, 0, 0, 0.5))",
              }}
            >
              <path d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path>
            </svg>
          </div>
          <div>
            <h1 className="font-medium">Darío A. Farfán Navarro</h1>
            <p className="font-medium text-sm text-lime-800 bg-lime-200 rounded-lg w-fit px-2 py-0.5">
              Active
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "#c4c6cd", transform: "", msFilter: "" }}
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
        </div>
      </div>

      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="click"
        className="bg-white focus:outline-none font-medium rounded-lg border-2 text-sm px-3 py-2 text-center inline-flex items-center justify-between"
        type="button"
      >
        Perú
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
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdownHover"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 border-2"
      >
        <ul
          className="py-2 text-sm text-gray-700"
          aria-labelledby="dropdownHoverButton"
        >
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Perú
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Argentina
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Bolivia
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Brasil
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Chile
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
