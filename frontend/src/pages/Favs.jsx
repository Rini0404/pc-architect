import React from "react";
import { useSelector } from "react-redux";
import PartFound from "../components/PartFound";

function Favorites() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      {user.savedParts.length > 0 ? (
        <div className=" pt-16 flex flex-col items-center justify-center">
          <PartFound isFavAlready={true} partsFound={user.savedParts} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-semibold text-gray-800 ">
            No favorites yet!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4 text-center w-80">
            Save your favorite parts by clicking on the heart icon to see them
            here.
          </p>
          <button className="bg-slate-800 text-white font-bold py-2 px-4 rounded">
            <a href="/search">Search for parts</a>
          </button>
        </div>
      )}
    </>
  );
}

export default Favorites;
