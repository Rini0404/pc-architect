import React from "react";

import { AiFillHeart, AiFillDelete } from "react-icons/ai";
import { parts } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { removeSavedPart, reset, savePart } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import authService from "../features/auth/authService";
import { useAuth } from "./Protection";

export default function PartFound({
  partsFound: initialPartsFound,
  isFavAlready,
}) {
  const [partsFound, setPartsFound] = React.useState(initialPartsFound);

  const { user, message, isSuccess, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // Use useEffect to update local state when initialPartsFound changes
  React.useEffect(() => {
    setPartsFound(initialPartsFound);
  }, [initialPartsFound]);

  const getImageForPart = (type) => {
    const part = parts.find((p) => p.name === type);
    return part ? part.png : null; // Return the image or null if not found
  };

  const errorToast = () => toast.error(message);

  React.useEffect(() => {
    if (message && !isSuccess) {
      errorToast();
      dispatch(reset());
    } else if (message && isSuccess) {
      toast.success(message);
      dispatch(reset());
    }
  }, [message]);

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  const dispatch = useDispatch();

  const handleAddFav = (event, item) => {
    event.stopPropagation();
    if (!isAuthenticated)
      return toast.error("Please sign in to favorite a part!");
    try {
      const part = {
        partId: item._id,
        type: item.Type.toLowerCase(),
      };
      dispatch(savePart(part));
      dispatch(authService.addPartToFavorites(item));
    } catch (error) {
      console.log("error in handleAddFav: ", error);
    }
  };

  const isPartSaved = (partId) => {
    if (!isAuthenticated) return;
    return user.savedParts.some((part) => part._id === partId);
  };

  const handleDeleteFav = (event, partId) => {
    event.stopPropagation();

    try {
      // Remove part from partsFound state
      const updatedPartsFound = partsFound.filter(
        (part) => part._id !== partId
      );
      setPartsFound(updatedPartsFound);

      dispatch(removeSavedPart(partId));

      dispatch(authService.removePartFromFavorites(partId));
    } catch (error) {
      console.error("error in handleDeleteFav: ", error);
      toast.error("Failed to remove part");
    }
  };

  const doHaveParts = partsFound.length > 0;

  console.log("PARTS FOUND UI COMPONENT: ", partsFound);

  return (
    <>
      {doHaveParts ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto max-w-full">
          {partsFound.map((item) => (
            <div key={item.id} className="md:p-12 lg:p-8 xl:p-12 p-3">
              <div
                className="bg-gray-700  relative block p-8 border border-gray-100 shadow-xl rounded-xl cardClickable "
                onClick={() => handleCardClick(item.URL)}
              >
                <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
                  {item.Type}
                </span>

                <div className="mt-4 text-gray-100 sm:pr-8">
                  <div
                    className="bg-slate-100 flex justify-center w-20 h-20 rounded-full 
              items-center
              "
                  >
                    <img
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      src={getImageForPart(item.Type)}
                      alt={`${item.Type}`}
                    />
                  </div>
                  <h5 className="mt-4 text-lg	 font-bold text-gray-300">
                    {item.Model}
                  </h5>
                  <p className=" mt-2 text-sm sm:block text-yellow-500">
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
                    {!isPartSaved(item._id) && !isFavAlready ? (
                      <button
                        className="bg-indigo-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => handleAddFav(e, item)}
                      >
                        <AiFillHeart />
                      </button>
                    ) : (
                      // remove button to the bottom right of card
                      <button
                        className="bg-red-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) => handleDeleteFav(e, item._id)}
                      >
                        <AiFillDelete />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        </div>
      )}
    </>
  );
}
