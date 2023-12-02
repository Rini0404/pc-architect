import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import Dropdown from "../components/Dropdown";

function Search() {
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/SignIn");
    }
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center p-6 md:p-14 border-2 border-gray-300 rounded-md shadow-lg w-full max-w-2xl">
        <h1 className="text-lg font-semibold mb-8">
          Search by hardware type and by model name!
        </h1>

        <div className="space-y-6 md:space-y-0 md:flex md:justify-center md:space-x-10 w-full p-4 rounded-md">
          <div>
            <h2 className="text-lg mb-2">Type</h2>
            <Dropdown />
          </div>

          <div>
            <h2 className="text-lg mb-2">Name</h2>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
