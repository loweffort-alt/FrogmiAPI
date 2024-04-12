import * as React from "react";
import * as ReactDOM from "react-dom";
import ButtonShow from "../components/ButtonShow";
import ButtonLoad from "../components/ButtonLoad";

const Home = () => {
  return (
    <div className="font-bold text-xl w-full">
      Hola amigos
      <div className="flex justify-around">
        <ButtonShow />
        <ButtonLoad />
      </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Home />, document.getElementById("home"));
});

export default Home;
