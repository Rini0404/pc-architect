import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pic from "../imgs/pcPic1.jpg";
import Heros from "../components/Heros";
import Welcome from "../components/Welcome";
import Gallery from "../components/Gallery";
import { useAuth } from "../components/Protection";

function IndexPage() {
  return (
    <>
      <div className="py-12 bg-yellow-50 overflow-y-hidden">
        {/* Code block starts */}
        <dh-component>
          <div className="w-full px-6">
            <div className="mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
              <Welcome />
              <img
                className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
                alt="bg"
              />
              <img
                className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
                alt="bg"
              />
              <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
                  Search for all the computer components you need!
                </h1>
              </div>
              <div className="flex justify-center items-center mb-10 sm:mb-20">
                <Link to="/Search">
                  <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
                    Search Now!
                  </button>
                </Link>
                <Link to="/Favs">
                  <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
                    View Your Favorites
                  </button>
                </Link>
              </div>
              {!useAuth() && (
                <p className="text-white text-sm sm:text-base ml-3 sm:ml-6 mt-2 sm:mt-0 pb-10 text-center">
                  <span className="font-bold">Note:</span> You must be logged in
                  to view your favorites!
                </p>
              )}
            </div>
            <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
              <div className="relative sm:w-2/3 w-11/12">
                <img
                  className="rounded-lg shadow-2xl"
                  src={Pic}
                  alt="Sample Page"
                  role="img"
                />
              </div>
            </div>
          </div>
        </dh-component>
        {/* Code block ends */}
      </div>

      <Heros />
      <Gallery />
    </>
  );
}

export default IndexPage;
