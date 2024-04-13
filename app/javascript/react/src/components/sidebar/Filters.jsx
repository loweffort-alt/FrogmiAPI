import * as React from "react";

const Filters = () => {
  return (
    <section className="h-full flex flex-col gap-3 py-5">
      <h2 className="text-xl font-bold">State</h2>
      <div className="flex justify-between rounded-md border-2 border-[#c4c6cd] p-1 px-3 items-center hover:cursor-pointer">
        <h2 className="text-[#c4c6cd]">Search</h2>
        <div className="text-[#c4c6cd] text-xl">Q</div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"></div>
        <h1>Lima</h1>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"></div>
        <h1>Apurimac</h1>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"></div>
        <h1>Ica</h1>
      </div>
      <div className="flex gap-2 items-center font-bold text-blue-600 hover:cursor-pointer">
        <h1>Show More</h1>
        <h1>v</h1>
      </div>
      <h2 className="text-xl font-bold">Province</h2>
      <div className="flex justify-between rounded-md border-2 border-[#c4c6cd] p-1 px-3 items-center hover:cursor-pointer">
        <h2 className="text-[#c4c6cd]">Search</h2>
        <div className="text-[#c4c6cd] text-xl">Q</div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"></div>
        <h1>Lima</h1>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"></div>
        <h1>Abancay</h1>
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-5 h-5 border-[#c4c6cd] border-2 rounded-sm hover:cursor-pointer"></div>
        <h1>Ica</h1>
      </div>
      <div className="flex gap-2 items-center font-bold text-blue-600 hover:cursor-pointer">
        <h1>Show More</h1>
        <h1>v</h1>
      </div>
    </section>
  );
};

export default Filters;
