import React from "react";

import { AiFillHeart } from "react-icons/ai";
import { parts } from "../constants";

export default function PartFound({ partsFound, isFavAlready }) {
  const getImageForPart = (type) => {
    const part = parts.find((p) => p.name === type);
    return part ? part.png : null; // Return the image or null if not found
  };

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100 overflow-x-auto max-w-full">
      {partsFound.map((item) => (
        <div key={item.id} className="md:p-12 lg:p-8 xl:p-12 p-3">
          <div
            className="relative block p-8 border border-gray-100 shadow-xl rounded-xl "
            href=""
          >
            <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
              {item.Type}
            </span>

            <div className="mt-4 text-gray-500 sm:pr-8">
              <img
                className="w-8 h-8 sm:w-10 sm:h-10"
                src={getImageForPart(item.Type)}
                alt={`${item.Type}`}
              />{" "}
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
                {!isFavAlready && (
                  <button
                    className="bg-indigo-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => handleAddFav(item)}
                  >
                    <AiFillHeart />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
