import React, { useState } from "react";
import "./Featured.css";
import { useNavigate } from "react-router-dom";

export const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
    <div className="h-[600px] flex justify-center bg-[#811899] text-white">
      <div className="w-[1400px] flex items-center px-6">
        {/* Left Section */}
        <div className="flex flex-col gap-8 flex-1">
          <h1 className="text-5xl font-bold">
            Find the perfect <i className="italic font-light">freelance</i>{" "}
            services for your business
          </h1>

          {/* Search Bar */}
          <div className="bg-white rounded-md flex items-center justify-between overflow-hidden">
            <div className="flex items-center gap-2">
              <img src="./search.jpg" alt="search" className="w-5 h-5 m-2" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                onChange={(e) => setInput(e.target.value)}
                className="border-none outline-none text-gray-700 placeholder-gray-500"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-32 h-12 bg-[#6b8a0d] text-white cursor-pointer"
            >
              Search
            </button>
          </div>

          {/* Popular Tags */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="whitespace-nowrap">Popular:</span>
            <button className="text-white border border-white px-3 py-1 rounded-full text-sm">
              Web Design
            </button>
            <button className="text-white border border-white px-3 py-1 rounded-full text-sm">
              Wordpress
            </button>
            <button className="text-white border border-white px-3 py-1 rounded-full text-sm">
              Logo Design
            </button>
            <button className="text-white border border-white px-3 py-1 rounded-full text-sm">
              AI Services
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 h-full flex justify-center items-center">
          <img src="./man.jpg" alt="man" className="h-full object-contain" />
        </div>
      </div>
    </div>
  );
};
