import React, { useState } from "react";
import { NavbarProps } from "../utils/types";

const Navbar = ({ onSearch }: NavbarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <header className="flex flex-col items-center justify-between p-4 bg-slate-50 md:flex-row md:items-end md:justify-between">
      <h1 className="mb-2 text-2xl font-bold text-center lg:text-4xl md:text-left md:mb-0">
        Notes
      </h1>
      <div className="flex flex-col w-full gap-2 md:flex-row md:items-center md:gap-2 md:w-auto">
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3.5 z-20">
            <svg
              className="w-4 h-4 text-gray-400 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <input
            className="w-full py-2 pl-10 text-sm border border-gray-200 rounded-lg focus:outline-none focus:outline-blue-500"
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          className="w-full px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 md:w-auto"
          type="button"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Navbar;
