import React from 'react'

function AuctionCardComponent() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
  <div className="relative">
    <img src="https://via.placeholder.com/400x300" alt="Auction item" className="w-full h-48 object-cover" />
    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
      LIVE
    </div>
    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
      3d 12h 45m left
    </div>
  </div>
  <div className="p-4">
    <h3 className="font-bold text-lg mb-1 truncate">Vintage Rolex Submariner Watch</h3>
    <p className="text-gray-600 text-sm mb-3">Condition: Excellent, Year: 1965</p>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-xs text-gray-500">Current Bid</p>
        <p className="font-bold text-lg">$4,250</p>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition">
        Place Bid
      </button>
    </div>
    <div className="mt-3 flex justify-between text-xs text-gray-500">
      <span>12 bids</span>
      <span>23 watchers</span>
    </div>
  </div>
</div>

    </>
  )
}

export default AuctionCardComponent
