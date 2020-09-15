import React from "react";

const SearchBar = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-white text-2xl md:text-3xl text-center pt-5 pb-5 rubik">
        IP Address Tracker
      </h1>
      <div className="flex h-10 justify-center md:mb-12 mb-8 mx-auto rubik text-xl tracking-wider">
        <input
          className="md:w-4/12 w-8/12 h-12 bg-white rounded-l-lg px-4"
          placeholder="Search for any IP address or domain"
        ></input>
        <button className="md:w-12 w-2/12 h-12 bg-black text-white rounded-r-lg focus:bg-gray-700">
          <svg
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="14"
          >
            <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
