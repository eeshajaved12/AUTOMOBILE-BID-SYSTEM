import React from 'react'

const SectionContainer = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  titleClass = '', 
  subtitleClass = '' 
}) => {
  return (
    <section className={`mb-8 ${className}`}>
      {title && (
        <h2 className={`text-2xl font-bold mb-2 ${titleClass}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-gray-600 mb-4 ${subtitleClass}`}>
          {subtitle}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  )
}

export default SectionContainer