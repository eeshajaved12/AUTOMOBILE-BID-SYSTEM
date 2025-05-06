import React from 'react'

const CardLayout = ({ 
  title, 
  children, 
  className = '', 
  headerClass = '', 
  bodyClass = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 ${className}`}>
      {title && (
        <h3 className={`font-bold text-lg mb-4 pb-2 border-b ${headerClass}`}>
          {title}
        </h3>
      )}
      <div className={bodyClass}>
        {children}
      </div>
    </div>
  )
}

export default CardLayout