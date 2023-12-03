import React from "react";

export default function PartFound({ partsFound }) {
  return (
    <>
      {/* eslint-disable-next-line array-callback-return */}
      {partsFound.map((item) => {
        <div className="md:p-12 lg:p-8 xl:p-12 p-3">
          <div
            className="relative block p-8 border border-gray-100 shadow-xl rounded-xl "
            href=""
          >
            <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
              {item.Type}
            </span>

            <div className="mt-4 text-gray-500 sm:pr-8">
              {/* <img className="w-8 h-8 sm:w-10 sm:h-10" src={} /> */}
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
                  // onClick={() => handleAddFav(item)}
                >
                  {/* <AiFill /> */}
                </button>
              </div>
            </div>
          </div>
        </div>;
      })}
    </>
  );
}
