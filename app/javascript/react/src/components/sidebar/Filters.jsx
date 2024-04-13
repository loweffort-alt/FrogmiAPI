import * as React from "react";

const Filters = () => {
  return (
    <section className="max-h-full flex flex-col justify-start border-b-2 border-[#ededed] p-5 py-3">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">State</h2>
        <div className="flex justify-between rounded-md border-2 border-gray-200 p-1 px-3 items-center hover:cursor-text">
          <h2 className="text-[#c4c6cd]">Search</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "#c4c6cd", transform: "", msFilter: "" }}
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="lima"
              type="checkbox"
              value=""
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="lima" className="w-full hover:cursor-pointer">
              Lima
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="apurimac"
              type="checkbox"
              value=""
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="apurimac" className="w-full hover:cursor-pointer">
              Apurimac
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="ica"
              type="checkbox"
              value=""
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="ica" className="w-full hover:cursor-pointer">
              Ica
            </label>
          </div>
          <div className="flex gap-2 items-center font-bold text-blue-600 hover:cursor-pointer">
            <h1>Show More</h1>
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#2563eb", transform: "", msFilter: "" }}
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Province</h2>
        <div className="flex justify-between rounded-md border-2 border-gray-200 p-1 px-3 items-center hover:cursor-text">
          <h2 className="text-[#c4c6cd]">Search</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "#c4c6cd", transform: "", msFilter: "" }}
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="lima2"
              type="checkbox"
              value=""
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="lima2" className="w-full hover:cursor-pointer">
              Lima
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="apurimac2"
              type="checkbox"
              value=""
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="apurimac2" className="w-full hover:cursor-pointer">
              Andahuaylas
            </label>
          </div>
          <div className="flex gap-4 items-center rounded-lg hover:bg-gray-100 hover:cursor-pointer">
            <input
              id="ica2"
              type="checkbox"
              value=""
              className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"
            />
            <label htmlFor="ica2" className="w-full hover:cursor-pointer">
              Chincha
            </label>
          </div>
          <div className="flex gap-2 items-center font-bold text-blue-600 hover:cursor-pointer">
            <h1>Show More</h1>
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#2563eb", transform: "", msFilter: "" }}
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
