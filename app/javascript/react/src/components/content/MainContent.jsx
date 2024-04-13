// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Search from "./Search";
import Card from "./Card";
import Metadata from "./Metadata";

const MainContent = () => {
  return (
    <section className="w-full">
      <Search />
      <Metadata />
      <Card />
    </section>
  );
};

export default MainContent;
