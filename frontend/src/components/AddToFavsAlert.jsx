import React from "react";

export default function AddToFavsAlert() {
  return (
    <div className="flex items-center p-6 space-x-4 rounded-md bg-indigo-600 dark:text-gray-100">
      <div className="flex items-center self-stretch justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-10 h-10"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <span>
        Your Results are below! Hit The heart to add to your favorites!
      </span>
    </div>
  );
}
