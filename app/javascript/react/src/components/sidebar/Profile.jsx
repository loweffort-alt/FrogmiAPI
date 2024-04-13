import * as React from "react";

const Profile = () => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex justify-between items-center hover:cursor-pointer">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-black rounded-md shadow-sm shadow-black">
            .
          </div>
          <div>
            <h1 className="font-bold">Darío Alexander</h1>
            <p className="text-[#c4c6cd]">Active</p>
          </div>
        </div>
        <div className="text-[#c4c6cd] text-2xl">v</div>
      </div>
      <div className="flex justify-between rounded-md border-2 border-[#c4c6cd] p-1 px-3 items-center hover:cursor-pointer">
        <h2>Perú</h2>
        <div className="text-[#c4c6cd] text-2xl">v</div>
      </div>
    </section>
  );
};

export default Profile;
