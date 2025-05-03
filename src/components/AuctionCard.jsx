import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';

export default function AuctionCard({
  image,
  title,
  currentBid,
  remainingTime,
  type,
  info,
  badge,
}) {
  const navigate = useNavigate();

  const isEndingSoon = type === 'bid' && remainingTime.startsWith('00:00:0');
  const isSold = type === 'sold';

  const handleBidClick = () => {
    if (title.toLowerCase().includes('macbook')) {
      navigate('/auction/macbook');
    }
  };

  return (
    <div
      className={`relative group transition duration-300 p-3 cursor-pointer rounded-xl shadow-sm 
        ${type === 'bid' ? 'border-2 border-yellow-400 bg-white hover:shadow-md hover:scale-[1.02]' : ''}
        ${type === 'starting' ? 'bg-white hover:shadow-md hover:scale-[1.02]' : ''}
        ${isSold ? 'bg-red-100 border border-red-400 text-red-700 opacity-90' : ''}`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full z-10">
          {badge}
        </div>
      )}

      {/* Sold Ribbon */}
      {isSold && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded z-10 font-bold">
          SOLD OUT
        </div>
      )}

      {/* Image */}
      <div className="h-24 sm:h-28 md:h-32 flex items-center justify-center mb-2">
        <img src={image} alt={title} className="max-h-full object-contain" />
      </div>

      {/* Title */}
      <div className="text-sm sm:text-base font-medium mb-1 truncate">{title}</div>

      {/* Info */}
      <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
        <PersonIcon fontSize="inherit" className="text-gray-400" />
        {info}
      </div>

      {/* Current Bid */}
      {type === 'bid' && (
        <div className="text-green-600 font-bold text-base sm:text-lg mb-1">${currentBid}</div>
      )}

      {/* Starting Text */}
      {type === 'starting' && (
        <div className="text-gray-700 text-xs font-medium mb-1">Bid starts in:</div>
      )}

      {/* Timer */}
      <div
        className={`flex items-center gap-1 text-sm font-mono mb-2 
        ${isEndingSoon ? 'bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded' : 'text-gray-700'}`}
      >
        <AccessTimeIcon fontSize="inherit" />
        {remainingTime}
      </div>

      {/* Action Button */}
      {type === 'bid' && (
        <button
          onClick={handleBidClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-1 text-sm rounded w-full"
        >
          BID NOW
        </button>
      )}

      {type === 'starting' && (
        <div className="bg-gray-200 py-1 text-sm rounded font-semibold text-gray-600 text-center">
          STARTING SOON
        </div>
      )}
    </div>
  );
}
