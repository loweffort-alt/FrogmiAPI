// eslint-disable-next-line no-unused-vars
import * as React from "react";
import TagsCard from "./TagCard";

const Card = ({ info }) => {
  return (
    <>
      <a
        href="#"
        className="block max-w-full p-6 py-4 bg-white border border-gray-100 shadow hover:bg-gray-100"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {info.attributes.magnitude.toFixed(1)} Ritcher scale · 9 min
        </h5>
        <p className="font-normal text-gray-700 mb-3">
          {info.attributes.place}
        </p>
        <TagsCard
          magType={info.attributes.mag_type}
          tsunami={info.attributes.tsunami}
        />
      </a>
    </>
  );
};

export default Card;
