import * as React from "react";
import * as ReactDOM from "react-dom";
import Sidebar from "../components/sidebar/Sidebar";
import MoreInfo from "../components/MoreInfo";
import MainContent from "../components/content/MainContent";

const Home = () => {
  return (
    <div className="w-full flex justify-between border-[#ededed] border-t-2">
      <Sidebar />
      <MainContent />
      <MoreInfo />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Home />, document.getElementById("home"));
});

export default Home;
