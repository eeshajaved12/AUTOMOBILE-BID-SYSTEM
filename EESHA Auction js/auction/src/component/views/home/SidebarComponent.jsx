import React from 'react'

function SidebarComponent() {
  return (
    <>
    <div className="bg-white rounded-lg shadow-sm p-4">
  <h3 className="font-bold text-lg mb-4">Filter Auctions</h3>
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option>All Categories</option>
      <option>Jewelry &amp; Watches</option>
      <option>Art &amp; Collectibles</option>
      <option>Electronics</option>
      <option>Automobiles</option>
      <option>Fashion</option>
    </select>
  </div>
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
    <div className="flex items-center space-x-2">
      <input type="number" placeholder="Min" className="w-1/2 border border-gray-300 rounded-md px-3 py-2" />
      <span>to</span>
      <input type="number" placeholder="Max" className="w-1/2 border border-gray-300 rounded-md px-3 py-2" />
    </div>
  </div>
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Auction Status</label>
    <div className="space-y-2">
      <label className="flex items-center">
        <input type="checkbox" className="rounded text-blue-600" />
        <span className="ml-2 text-sm">Live Auctions</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="rounded text-blue-600" />
        <span className="ml-2 text-sm">Upcoming</span>
      </label>
      <label className="flex items-center">
        <input type="checkbox" className="rounded text-blue-600" />
        <span className="ml-2 text-sm">Ended</span>
      </label>
    </div>
  </div>
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition">
    Apply Filters
  </button>
</div>

    </>
  )
}

export default SidebarComponent
