import React from 'react'

function BidFormComponent() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="font-bold text-xl mb-4">Place Your Bid</h3>
  <div className="mb-6 p-4 bg-blue-50 rounded-lg">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-600">Current Bid:</span>
      <span className="font-bold text-lg">$4,250</span>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-gray-600">Minimum Bid:</span>
      <span className="font-bold text-lg">$4,500</span>
    </div>
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">Your Bid Amount ($)</label>
    <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter amount" min={4500} step={50} />
  </div>
  <div className="mb-6">
    <label className="flex items-center">
      <input type="checkbox" className="rounded text-blue-600" />
      <span className="ml-2 text-sm">I agree to the <a href="#" className="text-blue-600 hover:underline">Terms &amp; Conditions</a></span>
    </label>
  </div>
  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-bold text-lg transition mb-3">
    Place Bid
  </button>
  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-md font-medium transition">
    Add to Watchlist
  </button>
</div>

    </>
  )
}

export default BidFormComponent
