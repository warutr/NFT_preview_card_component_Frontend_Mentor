import React from "react";
import { ClockIcon, EthereumIcon, ViewIcon } from "./svg";

const nftPreview = () => {
  return (
    <div className="max-w-[375px] mx-auto px-5">
      <div className="bg-very-dark-blue-card flex flex-col rounded-2xl p-7 drop-shadow-xl">
        <div className="drop-shadow-xl w-full h-auto overflow-hidden relative">
          <img
            src="image-equilibrium.jpg"
            alt=""
            className="object-contain rounded-2xl "
          />
          <div className="bg-cyan absolute w-full h-full top-0 flex justify-center items-center rounded-xl bg-opacity-50 opacity-0 hover:opacity-100 hover:cursor-pointer duration-700">
            <ViewIcon />
          </div>
        </div>
        <div className="text-white text-2xl mt-5 mb-2 font-semibold hover:text-cyan">
          <h2>Equilibrium #3429</h2>
        </div>
        <div className="flex mt-2 mb-2">
          <p className="text-soft-blue text-base">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>
        <div className="flex flex-row justify-between mt-2 mb-2">
          <div className="flex flex-row items-center">
            <EthereumIcon />
            <p className="text-cyan ml-2">0.041 ETH</p>
          </div>
          <div className="flex flex-row items-center">
            <ClockIcon />
            <p className="text-soft-blue ml-2">3 days left</p>
          </div>
        </div>
        <hr className="border-very-dark-blue-line mt-2 mb-2" />
        <div className="flex flex-row items-center mt-2 mb-2 ">
          <img src="image-avatar.png" alt="" className="block h-12" />
          <div className="flex ml-4">
            <p className="text-soft-blue">Creation of </p>
            <p className="text-white ml-1 hover:text-cyan">Jules Wyvern</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nftPreview;
