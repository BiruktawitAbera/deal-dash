import React from "react";
import { Avatar, Tooltip } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GavelIcon from "@mui/icons-material/Gavel";
import PersonIcon from "@mui/icons-material/Person";

// Dynamic color for avatars
const generateColor = (i) => {
  const colors = ["#f44336", "#2196f3", "#4caf50", "#ff9800", "#9c27b0", "#00bcd4", "#3f51b5"];
  return colors[i % colors.length];
};

const sampleBidders = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  name: `User${i + 1}`,
  color: generateColor(i),
}));

const promoItems = [
  {
    title: "Dickies Cool Athletic Hat",
    price: "$4.23",
    time: "00:00:05",
    img: "/items/hats.jpg",
  },
  {
    title: "Modern Ring LED Chandelier",
    price: "$4.22",
    time: "00:00:05",
    img: "/items/light.jpg",
  },
  {
    title: "Cinco de Mayo 1225 Bid Pack",
    price: "$3.70",
    time: "00:00:03",
    img: "/items/bags.jpg",
  },
];

export default function AuctionDetail() {
  const highestBidder = {
    name: "hotman187",
    date: "21/02/2025",
  };

  const bidHistory = [
    { price: "$40.09", user: "hotman187", time: "9:18:07 PM" },
    { price: "$40.08", user: "viktor123", time: "9:18:06 PM" },
    { price: "$40.07", user: "clayg123", time: "9:18:05 PM" },
    { price: "$40.06", user: "koengetzw45", time: "9:18:04 PM" },
  ];

  return (
    <div className="flex flex-col xl:flex-row px-4 py-6 max-w-screen-2xl mx-auto gap-6">
      {/* Main Content */}
      <div className="flex flex-col xl:flex-[4] gap-6 w-full">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Product Info */}
          <div className="flex-[2] w-full">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Apple MacBook Air 15-in M3 8C CPU - 10C GPU, 8GB 512GB, Starlight + The Business-ready Bundle
            </h2>
            <p className="text-sm text-gray-600 mt-1 mb-3">Buy it now price: $6,314</p>

            {/* Product Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
              {["macbook", "bags", "hats", "light", "watch", "headphones", "mouse", "multiplier"].map((item, i) => (
                <img
                  key={i}
                  src={`/items/${item}.jpg`}
                  alt={item}
                  className="border rounded w-full h-24 object-cover"
                />
              ))}
            </div>

            {/* Bidders */}
            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Other bidders in this auction</h3>
              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                {sampleBidders.map((bidder) => (
                  <Tooltip title={bidder.name} key={bidder.id}>
                    <Avatar
                      sx={{ width: 40, height: 40, bgcolor: bidder.color }}
                    >
                      <PersonIcon fontSize="small" />
                    </Avatar>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          {/* Bid Info */}
          <div className="flex-[1] bg-black border rounded p-4 shadow-sm w-full text-white">
            <h4 className="font-bold text-md mb-2">Current Bid</h4>
            <div className="text-xl font-semibold text-green-400">$40.09</div>
            <p className="text-sm text-gray-300 mt-1 mb-3">50% off</p>

            {/* Highest Bidder */}
            <div className="flex items-center gap-2 bg-gray-800 p-2 rounded border border-gray-600 mb-4">
              <Avatar sx={{ bgcolor: "#2196f3" }}>
                <PersonIcon fontSize="small" />
              </Avatar>
              <div>
                <div className="font-semibold text-white">{highestBidder.name}</div>
                <div className="text-xs text-gray-300">{highestBidder.date}</div>
              </div>
            </div>

            {/* Bid History */}
            <div className="bg-gray-900 border border-gray-700 rounded p-3 mb-4 max-h-72 overflow-y-auto">
              {bidHistory.map((bid, i) => (
                <div className="flex justify-between text-sm py-1 border-b border-gray-700" key={i}>
                  <span className="text-white">{bid.price}</span>
                  <span className="text-gray-300 flex items-center gap-1">
                    <GavelIcon fontSize="small" className="text-blue-400" />
                    {bid.user}
                  </span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <AccessTimeIcon fontSize="small" />
                    {bid.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Timer */}
            <div className="text-center mt-4 text-red-400 text-lg font-bold">
              00:00:04 <span className="text-sm text-gray-300">TIME LEFT</span>
            </div>

            {/* CTA */}
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-300 w-full py-2 rounded font-semibold text-black">
              Create Account
            </button>
          </div>
        </div>
      </div>

      {/* Promo Panel */}
      <div className="hidden xl:flex flex-col gap-4 w-[250px] shrink-0">
        {promoItems.map((item, i) => (
          <div key={i} className="border rounded p-3 bg-white shadow-sm">
            <img src={item.img} alt={item.title} className="w-full h-24 object-cover mb-2" />
            <h4 className="text-sm font-semibold">{item.title}</h4>
            <div className="text-green-600 font-bold">{item.price}</div>
            <div className="text-red-600 text-xs flex items-center gap-1">
              <AccessTimeIcon fontSize="small" /> {item.time}
            </div>
            <button className="mt-2 bg-yellow-300 hover:bg-yellow-200 w-full py-1 rounded text-sm font-semibold">
              BID NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
