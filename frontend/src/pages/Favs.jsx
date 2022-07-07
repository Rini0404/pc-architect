import React from "react";
import GpuPic from "../imgs/graphics-card.png";
import CpuPic from "../imgs/cpu-tower.png";
import RamPic from "../imgs/ram.png";
import UsbPic from "../imgs/usb-drive.png";
import HddPic from "../imgs/hard-disk.png";
import SsdPic from "../imgs/ssd-drive.png";
// import { FaSearch } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";


function Favorites() {
  const favs = JSON.parse(localStorage.getItem("fav"));
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <h1 className="p-20">Hello {user && user.name}, you're favorites are here!</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:-mx-8">
      {/* display favorites as cards */}
      {favs && favs.map((item) => {
        if (item.Type === "GPU") {
          return (
            <div className="md:p-12 lg:p-8 xl:p-12 p-3">
              <div
                className="relative block p-8 border border-gray-100 shadow-xl rounded-xl "
                href=""
              >
                <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                  {item.Type}
                </span>

                <div className="mt-4 text-gray-500 sm:pr-8">
                  <img className="w-8 h-8 sm:w-10 sm:h-10" src={GpuPic} />
                  <h5 className="mt-4 text-lg	 font-bold text-gray-900">
                    {item.Model}
                  </h5>

                  <p className=" mt-2 text-sm sm:block text-yellow-700">
                    {item.Brand}
                  </p>
                  <p className=" mt-2 text-sm sm:block">
                    Gpu Rank: {item.Rank}
                    <br></br>
                    Benchmark: {item.Benchmark}
                    <br></br>
                    Samples: {item.Samples}
                  </p>

                  {/* add button to the bottom right of card  */}
                  <div className="flex justify-end">
                    <button
                      className="bg-indigo-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (item.Type === "CPU") {
          return (
            <div className="md:p-12 lg:p-8 xl:p-12 p-3">
              <div
                className="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
                href=""
              >
                <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                  {item.Type}
                </span>

                <div className="mt-4 text-gray-500 sm:pr-8">
                  <img className="w-8 h-8 sm:w-10 sm:h-10" src={CpuPic} />
                  <h5 className="mt-4 text-lg	 font-bold text-gray-900">
                    {item.Model}
                  </h5>

                  <p className=" mt-2 text-sm sm:block text-yellow-700">
                    {item.Brand}
                  </p>
                  <p className=" mt-2 text-sm sm:block">
                    Cpu Rank: {item.Rank}
                    <br></br>
                    Benchmark: {item.Benchmark}
                    <br></br>
                    Samples: {item.Samples}
                  </p>

                  {/* add button to the bottom right of card  */}
                  <div className="flex justify-end">
                    <button
                      className="bg-indigo-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (item.Type === "RAM") {
          return (
            <div className="md:p-12 lg:p-8 xl:p-12 p-3">
              <div
                className="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
                href=""
              >
                <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                  {item.Type}
                </span>

                <div className="mt-4 text-gray-500 sm:pr-8">
                  <img className="w-8 h-8 sm:w-10 sm:h-10" src={RamPic} />
                  <h5 className="mt-4 text-lg	 font-bold text-gray-900">
                    {item.Model}
                  </h5>

                  <p className=" mt-2 text-sm sm:block text-yellow-700">
                    {item.Brand}
                  </p>
                  <p className=" mt-2 text-sm sm:block">
                    Ram Rank: {item.Rank}
                    <br></br>
                    Benchmark: {item.Benchmark}
                    <br></br>
                    Samples: {item.Samples}
                  </p>

                  {/* add button to the bottom right of card  */}
                  <div className="flex justify-end">
                    <button
                      className="bg-indigo-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (item.Type === "SSD") {
          return (
            <div className="md:p-12 lg:p-8 xl:p-12 p-3">
              <div
                className="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
                href=""
              >
                <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                  {item.Type}
                </span>

                <div className="mt-4 text-gray-500 sm:pr-8">
                  <img className="w-8 h-8 sm:w-10 sm:h-10" src={SsdPic} />
                  <h5 className="mt-4 text-lg	 font-bold text-gray-900">
                    {item.Model}
                  </h5>

                  <p className=" mt-2 text-sm sm:block text-yellow-700">
                    {item.Brand}
                  </p>
                  <p className=" mt-2 text-sm sm:block">
                    Ssd Rank: {item.Rank}
                    <br></br>
                    Benchmark: {item.Benchmark}
                    <br></br>
                    Samples: {item.Samples}
                  </p>

                  {/* add button to the bottom right of card  */}
                  <div className="flex justify-end">
                    <button
                      className="bg-indigo-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (item.Type === "USB") {
          return (
            <div className="md:p-12 lg:p-8 xl:p-12 p-3">
              <div
                className="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
                href=""
              >
                <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                  {item.Type}
                </span>

                <div className="mt-4 text-gray-500 sm:pr-8">
                  <img className="w-8 h-8 sm:w-10 sm:h-10" src={UsbPic} />
                  <h5 className="mt-4 text-lg	 font-bold text-gray-900">
                    {item.Model}
                  </h5>

                  <p className=" mt-2 text-sm sm:block text-yellow-700">
                    {item.Brand}
                  </p>
                  <p className=" mt-2 text-sm sm:block">
                    Usb Rank: {item.Rank}
                    <br></br>
                    Benchmark: {item.Benchmark}
                    <br></br>
                    Samples: {item.Samples}
                  </p>

                  {/* add button to the bottom right of card  */}
                  <div className="flex justify-end">
                    <button
                      className="bg-indigo-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (item.Type === "HDD") {
          return (
            <div className="md:p-12 lg:p-8 xl:p-12 p-3">
              <div
                className="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
                href=""
              >
                <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                  {item.Type}
                </span>

                <div className="mt-4 text-gray-500 sm:pr-8">
                  <img className="w-8 h-8 sm:w-10 sm:h-10" src={HddPic} />
                  <h5 className="mt-4 text-lg	 font-bold text-gray-900">
                    {item.Model}
                  </h5>

                  <p className=" mt-2 text-sm sm:block text-yellow-700">
                    {item.Brand}
                  </p>
                  <p className=" mt-2 text-sm sm:block">
                    Hdd Rank: {item.Rank}
                    <br></br>
                    Benchmark: {item.Benchmark}
                    <br></br>
                    Samples: {item.Samples}
                  </p>

                  {/* add button to the bottom right of card  */}
                  <div className="flex justify-end">
                    <button
                      className="bg-indigo-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <AiFillHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
      )}

      </div>
    </>
  );
}

export default Favorites;
