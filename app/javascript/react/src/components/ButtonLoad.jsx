import * as React from "react";
import * as ReactDOM from "react-dom";

const ButtonLoad = () => {
  return (
    <div
      onClick={() => console.log("weas")}
      className="rounded-lg w-28 h-20 font-bold text-2xl bg-lime-200 text-center hover:cursor-pointer"
    >
      Load Data
    </div>
  );
};

//document.addEventListener("DOMContentLoaded", () => {
//ReactDOM.render(<ButtonLoad />, document.getElementById("button_load"));
//});

export default ButtonLoad;
