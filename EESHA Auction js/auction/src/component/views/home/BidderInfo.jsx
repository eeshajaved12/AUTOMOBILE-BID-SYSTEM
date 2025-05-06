import React from 'react'

const BidderInfo = ({ 
  initials, 
  bgColor, 
  textColor, 
  username, 
  bidTime, 
  bidAmount 
}) => {
  return (
    <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
      <div className="flex items-center">
        <div 
          className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center mr-3`}
          style={{ backgroundColor: bgColor }}
        >
          <span className={`${textColor} font-medium text-sm`}>{initials}</span>
        </div>
        <div>
          <p className="font-medium text-sm">{username}</p>
          <p className="text-xs text-gray-500">{bidTime}</p>
        </div>
      </div>
      <span className="font-bold">${bidAmount}</span>
    </div>
  )
}

export default BidderInfo