// eslint-disable-next-line no-unused-vars
import * as React from "react";

const Card = () => {
  return (
    <section className="w-full">
      <a
        href="#"
        class="block max-w-full p-6 bg-white border border-gray-200 shadow hover:bg-gray-100 active:border-l-blue-700 active:border-l-4"
      >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
    </section>
  );
};

export default Card;
