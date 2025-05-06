import React from 'react'

function BidHistoryComponent() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-4">
  <h3 className="font-bold text-lg mb-4 pb-2 border-b">Bid History (14)</h3>
  <div className="space-y-3 max-h-64 overflow-y-auto">
    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
          <span className="text-blue-600 font-medium text-sm">JD</span>
        </div>
        <div>
          <p className="font-medium text-sm">JohnDoe82</p>
          <p className="text-xs text-gray-500">Today, 10:45 AM</p>
        </div>
      </div>
      <span className="font-bold">$4,250</span>
    </div>
    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
          <span className="text-purple-600 font-medium text-sm">AS</span>
        </div>
        <div>
          <p className="font-medium text-sm">AuctionStar</p>
          <p className="text-xs text-gray-500">Today, 09:30 AM</p>
        </div>
      </div>
      <span className="font-bold">$4,100</span>
    </div>
    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
          <span className="text-green-600 font-medium text-sm">CW</span>
        </div>
        <div>
          <p className="font-medium text-sm">CollectorW</p>
          <p className="text-xs text-gray-500">Yesterday, 8:15 PM</p>
        </div>
      </div>
      <span className="font-bold">$3,950</span>
    </div>
  </div>
</div>

    </>
  )
}

export default BidHistoryComponent
