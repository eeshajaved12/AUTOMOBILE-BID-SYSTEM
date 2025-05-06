import React from 'react'

function NAVBAR() {
  return (
    <>
     <nav className="bg-gray-900 text-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      {/* Logo/Brand */}
      <div className="flex-shrink-0 flex items-center">
        <i className="fas fa-car-alt text-blue-400 text-2xl mr-2" />
        <span className="text-xl font-bold">Auto<span className="text-blue-400">BIT</span></span>
      </div>
      {/* Primary Nav */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-blue-400 transition duration-300">
          <i className="fas fa-home mr-1" /> Dashboard
        </a>
        <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-blue-400 transition duration-300">
          <i className="fas fa-car-crash mr-1" /> Diagnostics
        </a>
        <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-blue-400 transition duration-300">
          <i className="fas fa-chart-line mr-1" /> Performance
        </a>
        <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-blue-400 transition duration-300">
          <i className="fas fa-tools mr-1" /> Maintenance
        </a>
        <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-blue-400 transition duration-300">
          <i className="fas fa-history mr-1" /> History
        </a>
      </div>
      {/* Secondary Nav */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-800 relative">
          <i className="fas fa-bell text-lg" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-sm font-semibold">JS</span>
          </div>
          <span className="text-sm">John Smith</span>
        </div>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-button">
          <span className="sr-only">Open main menu</span>
          <i className="fas fa-bars text-xl" id="menu-icon" />
        </button>
      </div>
    </div>
  </div>
  {/* Mobile menu */}
  <div className="md:hidden hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-blue-400">
        <i className="fas fa-home mr-2" /> Dashboard
      </a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-blue-400">
        <i className="fas fa-car-crash mr-2" /> Diagnostics
      </a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-blue-400">
        <i className="fas fa-chart-line mr-2" /> Performance
      </a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-blue-400">
        <i className="fas fa-tools mr-2" /> Maintenance
      </a>
      <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-blue-400">
        <i className="fas fa-history mr-2" /> History
      </a>
    </div>
    <div className="pt-4 pb-3 border-t border-gray-700">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-sm font-semibold">JS</span>
          </div>
        </div>
        <div className="ml-3">
          <div className="text-base font-medium">John Smith</div>
          <div className="text-sm font-medium text-gray-400">Admin</div>
        </div>
        <button className="ml-auto flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
          <i className="fas fa-bell text-lg" />
        </button>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default NAVBAR
