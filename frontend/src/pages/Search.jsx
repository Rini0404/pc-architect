import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import Dropdown from "../components/Dropdown";
import { toast } from "react-toastify";
import { getPartByKeyAndType, resetPart } from "../features/parts/partSlice";
import PartFound from "../components/PartFound";
import { SEARCH_TYPE } from "../constants";

function Search() {
  const resultsRef = React.useRef(null);

  const dispatch = useDispatch();

  const partsFound = useSelector((state) => state?.parts?.parts);
  
  const { isLoading, searchPerformed } = useSelector((state) => state.parts);

  useEffect(() => {
    if (!isLoading && searchPerformed) {
      if (partsFound.length === 0) {
        toast.error("No parts found!");
      } else {
        scrollToResults();
      }
    }
    console.log("partsFound: ", partsFound)
  }, [partsFound, isLoading, searchPerformed]);


  const [selectedType, setSelectedType] = useState(null);

  const [selectedName, setSelectedName] = useState(null);

  const scrollToResults = () => {
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const notifyError = () => toast.error("Please select a type!");

  const handleSubmit = async (e) => {
    // handle set is loading here....

    dispatch(resetPart());

    if (!selectedType) {
      notifyError();
      return;
    }

    e.preventDefault();

    const ifSelectedName = selectedName ? selectedName : SEARCH_TYPE.GET_ALL;

    const part = {
      type: selectedType.toLowerCase(),
      model: encodeURIComponent(ifSelectedName === SEARCH_TYPE.GET_ALL ? SEARCH_TYPE.GET_ALL : selectedName.toLowerCase()),
    };

    console.log("part: ", part);

    dispatch(getPartByKeyAndType(part));

  };

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-100 ">
        <div className="text-center p-6 md:p-14 border-2 border-gray-300 rounded-md shadow-lg  w-10/12 md:w-1/2">
          <h1 className="text-lg font-semibold mb-8">
            Search by hardware type and by model name!
          </h1>

          <div className="space-y-6 md:space-y-0 md:flex md:justify-center md:space-x-10 p-4 rounded-md mx-auto">
            <div>
              <h2 className="text-lg mb-2">Type</h2>
              <Dropdown setSelectedType={setSelectedType} />
            </div>

            <div>
              <h2 className="text-lg mb-2">Models</h2>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
                style={{ minWidth: "15vw" }}
                onChange={(e) => setSelectedName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center py-5">
            <button
              className="bg-slate-800 text-white font-bold py-2 px-4 rounded w-1/2"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
            <p className="text-xs text-gray-500 mt-2">
              If you want to search all models, leave the models field empty.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Click on any card to view its preformance data and click on the heart to save it to your favorites.
              </p>
        </div>
      </div>
      {partsFound.length !== 0 && (
        <div ref={resultsRef}>
          <PartFound partsFound={partsFound} />
        </div>
      )}
    </>
  );
}

export default Search;

/**
 * {!selectedType || !selectedName ? (
          <div className="flex justify-center py-5">
            <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2">
              {" "}
              Reset{" "}
            </button>
          </div>
        ) : (
 */
