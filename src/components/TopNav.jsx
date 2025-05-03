import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function TopNav() {
  return (
    <div className="bg-white border-b shadow-sm py-2 px-4 flex flex-wrap justify-between items-center gap-4 sm:gap-2">
      {/* Left: Logo and Search */}
      <div className="flex items-center gap-2 flex-wrap">
        <img src="/Logo.png" alt="DealDash Logo" className="h-8" />
        <input
          type="text"
          placeholder="Search Auctions..."
          className="border rounded px-3 py-1 text-sm w-40 sm:w-60"
        />
        <button className="bg-gray-100 px-2 py-1 text-sm border rounded whitespace-nowrap">
          Search Auctions
        </button>
      </div>

      {/* Center Nav */}
      <div className="hidden md:flex items-center gap-4 text-sm">
        <a href="#" className="text-gray-700 hover:text-black">Help</a>
        <a href="#" className="text-gray-700 hover:text-black">Tips & Tricks</a>
        <a href="#" className="text-gray-700 hover:text-black">Winners</a>
        <a href="#" className="text-blue-600 hover:underline">Get Started</a>
      </div>

      {/* Right: Auth & Icons */}
      <div className="flex items-center gap-2">
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
          Log In
        </button>
        <NotificationsNoneIcon className="text-gray-600" />
      </div>
    </div>
  );
}
