import * as React from "react";
import * as ReactDOM from "react-dom";
import ButtonShow from "../components/ButtonShow";
import ButtonLoad from "../components/ButtonLoad";
import Sidebar from "../components/sidebar/Sidebar";
import MoreInfo from "../components/MoreInfo";

const Home = () => {
  return (
    <div className="w-full flex justify-between border-2 border-white">
      <div className="w-full flex justify-between border-[#ededed] border-t-4">
        <Sidebar />
        <div className="w-full p-5">
          <ButtonShow />
          <ButtonLoad />
        </div>
        <MoreInfo />
      </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Home />, document.getElementById("home"));
});

export default Home;
