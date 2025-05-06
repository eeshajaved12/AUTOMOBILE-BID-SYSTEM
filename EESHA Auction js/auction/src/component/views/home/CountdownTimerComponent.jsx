import React from 'react'

function CountdownTimerComponent() {
  return (
    <>
    <div className="bg-gray-100 p-4 rounded-lg">
  <h4 className="text-center font-medium mb-3">Auction Ends In:</h4>
  <div className="flex justify-center space-x-2">
    <div className="text-center">
      <div className="bg-white p-2 rounded-md shadow-sm w-14">
        <span className="text-2xl font-bold">02</span>
      </div>
      <span className="text-xs text-gray-500 mt-1 block">Days</span>
    </div>
    <div className="text-center">
      <div className="bg-white p-2 rounded-md shadow-sm w-14">
        <span className="text-2xl font-bold">08</span>
      </div>
      <span className="text-xs text-gray-500 mt-1 block">Hours</span>
    </div>
    <div className="text-center">
      <div className="bg-white p-2 rounded-md shadow-sm w-14">
        <span className="text-2xl font-bold">34</span>
      </div>
      <span className="text-xs text-gray-500 mt-1 block">Minutes</span>
    </div>
    <div className="text-center">
      <div className="bg-white p-2 rounded-md shadow-sm w-14">
        <span className="text-2xl font-bold">12</span>
      </div>
      <span className="text-xs text-gray-500 mt-1 block">Seconds</span>
    </div>
  </div>
  <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium transition">
    Bid Now
  </button>
</div>

    </>
  )
}

export default CountdownTimerComponent
