import React from "react";

function Favorites() {
  const favs = JSON.parse(localStorage.getItem("fav"));
  console.log(favs);

  return (
    <>
      <h1 className="p-20">Your Favorites Here!</h1>
      <div className="flex flex-wrap">
      {/* display favorites as cards */}
      {favs && favs.map((item) => {
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
                  </div>
                </div>
                
              </div>
        )
      }
      )}

      </div>
    </>
  );
}

export default Favorites;
