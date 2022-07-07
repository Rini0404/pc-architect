import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GpuPic from "../imgs/graphics-card.png";
import CpuPic from "../imgs/cpu-tower.png";
import RamPic from "../imgs/ram.png";
import UsbPic from "../imgs/usb-drive.png";
import HddPic from "../imgs/hard-disk.png";
import SsdPic from "../imgs/ssd-drive.png";
import Spinner from "../components/Spinner";

function Search() {
  const [gpu, setGpu] = React.useState([]);
  const [cpu, setCpu] = React.useState([]);
  const [rams, setRam] = React.useState([]);
  const [ssd, setSsd] = React.useState([]);
  const [usb, setUsb] = React.useState([]);
  const [hdd, setHdd] = React.useState([]);

  const [searchInput, setSearchInput] = useState("");
  const favs = [];
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [filteredResults, setFilteredResults] = useState([]);

  const gpuApi = "/api/gpus";
  const cpuApi = "/api/cpus";
  const ramApi = "/api/rams";
  const ssdAPI = "/api/ssds";
  const usbApi = "/api/usbs";
  const hddApi = "/api/hdds";

  const getGpu = axios.get(gpuApi);
  const getCpu = axios.get(cpuApi);
  const getRam = axios.get(ramApi);
  const getSsd = axios.get(ssdAPI);
  const getUsb = axios.get(usbApi);
  const getHdd = axios.get(hddApi);

  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/SignIn");
    }
    if (isLoading) {
      return <Spinner />;
    }
  }, [user, navigate, isLoading]);

  // useEffect to get cpu and gpus
  useEffect(() => {
    axios
      .all([getGpu, getCpu, getRam, getSsd, getUsb, getHdd])
      .then(
        axios.spread((...responses) => {
          setGpu(responses[0].data);
          setCpu(responses[1].data);
          setRam(responses[2].data);
          setSsd(responses[3].data);
          setUsb(responses[4].data);
          setHdd(responses[5].data);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // search gpus and cpus if adding more data, add more filteredData
  const searchGpus = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredDataGpu = gpu.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      const filteredDataCpu = cpu.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      const filteredDataRam = rams.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      const filteredDataSsd = ssd.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      const filteredDataUsb = usb.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      const filteredDataHdd = hdd.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults([
        ...filteredDataGpu,
        ...filteredDataCpu,
        ...filteredDataRam,
        ...filteredDataSsd,
        ...filteredDataUsb,
        ...filteredDataHdd,
      ]);
    } else {
      setFilteredResults([]);
    }
  };

  const notify = () => toast("Added to favorites!");

  // add to favorites
  const handleAddFav = (item) => {
    favs.push(item);
    localStorage.setItem("fav", JSON.stringify(favs));
    notify();
  };

  return (
    <>
      <div className="p-20 landing-page flex justify-center">
        <div className="landing-page-header ">
          <div className="landing-page-header-text ">
            <h1>Welcome {user && user.name} </h1>
          </div>
        </div>
      </div>
      
      {/* section to display data */}
      <div className="flex justify-center">
        <div className="container h-100 border border-black">
          <div className="d-flex justify-content-center h-100">
            <div className="search">
              <input
                onChange={(e) => searchGpus(e.target.value)}
                className="search_input bg-sky-500"
                type="text"
                name=""
                placeholder="Search component..."
              />
              <a className="search_icon">
                <FaSearch />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* filter through search  */}
      <div className="">
        <div className="p-10 landing-page flex justify-center">
          <div className="landing-page-header">
            <div className="flex items-center p-6 space-x-4 rounded-md bg-indigo-600 dark:text-gray-100">
              <div className="flex items-center self-stretch justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span>
               Your Results are below! Hit The heart to add to your favorites!
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {filteredResults.map((item) => {
            // if for what icon matches specific seacrh
            if (item.Type === "GPU") {
              return (
                <div className="w-full md:w-1/2 p-3">
                  <div
                    className="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
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

                      <p className="hidden mt-2 text-sm sm:block text-yellow-700">
                        {item.Brand}
                      </p>
                      <p className="hidden mt-2 text-sm sm:block">
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
                          onClick={() => handleAddFav(item)}
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
                <div className="w-full md:w-1/2 p-3">
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

                      <p className="hidden mt-2 text-sm sm:block text-yellow-700">
                        {item.Brand}
                      </p>
                      <p className="hidden mt-2 text-sm sm:block">
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
                          onClick={() => handleAddFav(item)}
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
                <div className="w-full md:w-1/2 p-3">
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

                      <p className="hidden mt-2 text-sm sm:block text-yellow-700">
                        {item.Brand}
                      </p>
                      <p className="hidden mt-2 text-sm sm:block">
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
                          onClick={() => handleAddFav(item)}
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
                <div className="w-full md:w-1/2 p-3">
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

                      <p className="hidden mt-2 text-sm sm:block text-yellow-700">
                        {item.Brand}
                      </p>
                      <p className="hidden mt-2 text-sm sm:block">
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
                          onClick={() => handleAddFav(item)}
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
                <div className="w-full md:w-1/2 p-3">
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

                      <p className="hidden mt-2 text-sm sm:block text-yellow-700">
                        {item.Brand}
                      </p>
                      <p className="hidden mt-2 text-sm sm:block">
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
                          onClick={() => handleAddFav(item)}
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
                <div className="w-full md:w-1/2 p-3">
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

                      <p className="hidden mt-2 text-sm sm:block text-yellow-700">
                        {item.Brand}
                      </p>
                      <p className="hidden mt-2 text-sm sm:block">
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
                          onClick={() => handleAddFav(item)}
                        >
                          <AiFillHeart />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
