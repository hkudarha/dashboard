import React from "react";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
   <div className="w-full bg-[#F1EDEC] fixed  right-0 top-0 z-10">
     <header className=" w-full  px-4 py-2 rounded-t-xl flex items-center justify-between ">
      {/* Left: Empty spacer or logo placeholder */}
      <div className="flex items-center z-10 min-w-[60px]"></div>

      {/* Center: Search Bar */}
      <div className="absolute  ml-[30rem]  transform -translate-x-1/2 sm:w-full max-w-md">
        <div className="">
          <input
            type="text"
            placeholder='Try Searching "insights"'
            className="w-full pl-9 pr-4 py-2 rounded-full bg-white text-sm text-gray-700 focus:outline-none shadow-sm"
          />
          <span className="absolute left-3 top-2.5 text-gray-400 text-sm"><FaSearch /></span>
        </div>
      </div>

      {/* Right: Menu + Avatar + Add Button */}
      <div className="flex items-center space-x-3 z-10">
        {/* Menu + Avatar group */}
        <div className="flex items-center bg-white rounded-full px-2 py-1 shadow space-x-2">
          <span className="text-xl font-bold">☰</span>
          <img
            src="https://i.pravatar.cc/36"
            alt="avatar"
            className="w-7 h-7 rounded-full object-cover"
          />
        </div>

        {/* Add Button */}
        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#e44b68] text-white text-xl shadow">
          ＋
        </button>
      </div>
    </header>
   </div>
  );
};

export default Header;