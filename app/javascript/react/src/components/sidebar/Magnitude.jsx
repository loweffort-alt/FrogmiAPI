import * as React from "react";

const Magnitude = ({ checkboxes }) => {
  const [realData, setRealData] = React.useState(null);

  const arrayCheckedMagType = Object.keys(checkboxes).filter(
    (key) => checkboxes[key],
  );

  const urlFilterByMagType = arrayCheckedMagType.join(",");

  const handleUpdateData = () => {
    if (arrayCheckedMagType.length) {
      fetch("http://127.0.0.1:3000/api/features")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data received:", data);
          setRealData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          alert("Error loading data.");
        });
    } else {
      fetch("http://127.0.0.1:3000/api/features?page=1&per_page=10")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data received:", data);
          setRealData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          alert("Error loading data.");
        });
    }
  };

  return (
    <>
      <div className=" p-5">
        <h2 className="text-xl font-bold mb-3">Magnitude Scale</h2>
        <div className="relative">
          <label htmlFor="labels-range-input" className="sr-only">
            Labels range
          </label>
          <input
            id="labels-range-input"
            type="range"
            defaultValue="4"
            min="-1"
            max="10"
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200"
          />
          <span className="text-sm text-gray-500 absolute start-0 -bottom-6">
            Min (-1)
          </span>
          <span className="text-sm text-gray-500 absolute end-0 -bottom-6">
            Max (10)
          </span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          type="button"
          className="m-5 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
          onClick={() => refreshPage()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Magnitude;
