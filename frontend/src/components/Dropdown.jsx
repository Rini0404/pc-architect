import React, { useState } from "react";
import GpuPic from "../imgs/graphics-card.png";
import CpuPic from "../imgs/cpu-tower.png";
import RamPic from "../imgs/ram.png";
import UsbPic from "../imgs/usb-drive.png";
import HddPic from "../imgs/hard-disk.png";
import SsdPic from "../imgs/ssd-drive.png";

const parts = [
  { name: "GPU", png: GpuPic },
  { name: "CPU", png: CpuPic },
  { name: "RAM", png: RamPic },
  { name: "HDD", png: HddPic },
  { name: "SSD", png: SsdPic },
  { name: "USB", png: UsbPic },
];

const Dropdown = ({ setSelectedType }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [selectedPart, setSelectedPart] = useState({
    name: "Select a part",
    png: null,
  });

  return (
    <div className="relative inline-block text-left">
      <div 
        style={{minWidth: "15vw"}}
      >
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedPart.png && (
            <img
              src={selectedPart.png}
              alt={selectedPart.name}
              className="w-5 h-5 mr-2"
            />
          )}
          {selectedPart.name}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.294-3.294a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {parts.map((part) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key={part.name}
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={() => {
                  setSelectedPart(part);
                  setSelectedType(part.name);
                  setIsOpen(false);
                }}
              >
                <span className="inline-flex items-center">
                  <img
                    src={part.png}
                    alt={part.name}
                    className="w-5 h-5 mr-2"
                  />
                  {part.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
