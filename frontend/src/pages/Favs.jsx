import React from "react";
import { useSelector } from "react-redux";
import PartFound from "../components/PartFound";

function Favorites() {
  const { user } = useSelector((state) => state.auth);

  console.log("user", user.savedParts);

  return (
    <>
      <h1 className="p-20">
        Hello {user && user.name}, you're favorites are here!
      </h1> <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100 overflow-x-auto max-w-full">
        {user.savedParts.length > 0 ? (
            <PartFound 
              isFavAlready={true}
            partsFound={user.savedParts} />
        ) : (
          <h1 className="p-20">You have no favorites yet!</h1>
        )}
      </div>
    </>
  );
}

export default Favorites;
