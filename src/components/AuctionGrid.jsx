import React from 'react';
import AuctionCard from './AuctionCard';

export default function AuctionGrid() {
  const auctions = [
    {
      image: '/items/macbook.jpg',
      title: 'Apple MacBook Air M1',
      currentBid: '40.02',
      remainingTime: '00:00:05',
      type: 'bid',
      info: 'searider21',
      badge: '150 BIDS',
    },
    {
      image: '/items/guitar.jpg',
      title: 'Yamaha Pacifica Guitar',
      remainingTime: '06:17:43',
      type: 'starting',
      info: 'Bid today for $700',
    },
    {
      image: '/items/sunscreen.jpg',
      title: 'Crayola DealDash Art Set',
      remainingTime: '—',
      type: 'sold',
      info: 'Curdletwinkledim',
    },
    {
      image: '/items/iphone.jpg',
      title: 'iPhone 15 Pro Max',
      remainingTime: '11:01:43',
      type: 'starting',
      info: 'Buy it now $1300',
    },
    {
      image: '/items/spray.jpg',
      title: 'Jimmy Choo EDT Spray',
      currentBid: '5.04',
      remainingTime: '00:00:09',
      type: 'bid',
      info: 'trendylove21',
    },
    {
      image: '/items/hats.jpg',
      title: 'Athletic Hat Triple Pack',
      currentBid: '4.17',
      remainingTime: '00:00:07',
      type: 'bid',
      info: 'fieldboss',
    },
    {
      image: '/items/watch.jpg',
      title: 'Bolivar Black Watch',
      currentBid: '0.14',
      remainingTime: '00:00:02',
      type: 'bid',
      info: 'trevormad',
    },
    {
      image: '/items/bags.jpg',
      title: '125 Bid Pack',
      currentBid: '0.10',
      remainingTime: '00:00:03',
      type: 'bid',
      info: 'bidwarrior88',
      badge: '125 BIDS',
    },
    {
      image: '/items/mouse.jpg',
      title: 'Wireless Gaming Mouse',
      currentBid: '1.32',
      remainingTime: '00:00:06',
      type: 'bid',
      info: 'goldenthreads',
    },
    {
      image: '/items/sneakers.jpg',
      title: "Adidas Men's Sneakers",
      currentBid: '2.65',
      remainingTime: '00:00:09',
      type: 'bid',
      info: 'wearysteps',
    },
    {
      image: '/items/sofas.jpg',
      title: 'Persian Damask Sofa',
      currentBid: '0.86',
      remainingTime: '00:00:05',
      type: 'bid',
      info: 'homehero91',
    },
    {
      image: '/items/headphones.jpg',
      title: 'Sony WH-1000XM5 Headphones',
      currentBid: '2.20',
      remainingTime: '00:00:03',
      type: 'bid',
      info: 'techlover77',
    },
    {
      image: '/items/earrings.jpg',
      title: 'Diamond Earrings',
      currentBid: '2.13',
      remainingTime: '00:00:06',
      type: 'bid',
      info: 'glamgal22',
    },
    {
      image: '/items/multiplier.jpg',
      title: '1x Multiplier – 3 Hours',
      currentBid: '2.44',
      remainingTime: '00:00:04',
      type: 'bid',
      info: 'fastbid32',
    },
    {
      image: '/items/rings.jpg',
      title: 'Gold Band Ring - Size 7',
      currentBid: '2.61',
      remainingTime: '00:00:03',
      type: 'bid',
      info: 'allbeauti123',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Live Auctions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {auctions.map((item, idx) => (
            <AuctionCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
