import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import axios from "axios";
import { Card, Input } from "semantic-ui-react";
import {FaSearch} from "react-icons/fa";
import {AiFillHeart} from "react-icons/ai";
function Search() {
  const [gpu, setGpu] = React.useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const favs = [];

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      navigate("/SignIn");
    }
  }, [user, navigate]);

  React.useEffect(() => {
    axios.get("/api/gpus").then((res) => {
      setGpu(res.data);
      console.log(res.data);
    });
  }, []);

  // search gpus
  const searchGpus = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = gpu.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(gpu);
    }
  };

  // add to favorites
  const handleAddFav = (item) => {
    favs.push(item);
    localStorage.setItem("fav", JSON.stringify(favs));
  };
  return (
    <>
      <div className="p-20 landing-page">
        <div className="landing-page-header">
          <div className="landing-page-header-text">
            {/* passes in user data
                            can change it to email, if i want an email instead of name */}
            <h1>Welcome {user && user.name} </h1>
          </div>
        </div>
      </div>
      {/* section to display data */}
      <div className="flex justify-center">
      <div class="container h-100 border border-black">
      <div class="d-flex justify-content-center h-100">
        <div class="search">
          <input 
            onChange={(e) => searchGpus(e.target.value)}
          class="search_input bg-sky-500" type="text" name="" placeholder="Search component..."/>
          <a class="search_icon"><FaSearch/></a>
        </div>
        </div>
        
      </div>
    </div>
      {/* filter through search  */}
      <div className="">
      <div className="p-10 landing-page flex justify-center">
        <div className="landing-page-header">
          <div className="landing-page-header-text">
            <h1>Search Results</h1>
          </div>
        </div>
      </div>
        
        <div className="flex flex-wrap">
          {filteredResults.map((item) => {
            return (
              <div className="w-full md:w-1/2 p-3">
                <div
                  class="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
                  href=""
                >
                  <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                  { item.Type}
                  </span>

                  <div class="mt-4 text-gray-500 sm:pr-8">
                    <svg
                      
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>

                    <h5 class="mt-4 text-lg	 font-bold text-gray-900">
                      {item.Model}
                    </h5>

                    <p class="hidden mt-2 text-sm sm:block text-yellow-700">
                      {item.Brand}
                    </p>
                    <p class="hidden mt-2 text-sm sm:block">
                    Gpu Rank: {item.Rank}<br></br>
                    Benchmark: {item.Benchmark}<br></br>
                    Samples: {item.Samples}
                    </p>

                    {/* add button to the bottom right of card  */}
                    <div className="flex justify-end">
                      <button
                        className="bg-indigo-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleAddFav(item)}
                      >
                        <AiFillHeart/>
                      </button>
                    </div>

                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
