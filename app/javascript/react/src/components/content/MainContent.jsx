// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Search from "./Search";
import Card from "./Card";
import Metadata from "./Metadata";

const MainContent = ({ apiData }) => {
  const [activeIndex, setActiveIndex] = React.useState(false);

  const data = apiData?.data;
  const dataAmount = data?.length;

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full">
      <Search />
      <Metadata dataAmount={dataAmount} />
      <div className="overflow-y-auto h-full">
        {data?.map((e, i) => (
          <section
            key={i}
            className={`w-full ${i === activeIndex ? "border-l-blue-700 border-l-4" : ""}`}
            onClick={() => handleClick(i)}
          >
            <Card info={e} />
          </section>
        ))}
      </div>
    </section>
  );
};

export default MainContent;
