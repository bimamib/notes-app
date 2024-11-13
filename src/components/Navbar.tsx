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

  return (
    <header className="bg-slate-50 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold lg:text-4xl">Notes</h1>
      <input
        className="navbar-search-input p-2 border border-gray-200 focus:outline-none focus:outline-blue-500 rounded-lg w-3/5 mr-2 text-sm"
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        type="button"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </header>
  );
};

export default Navbar;
