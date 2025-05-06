import React from 'react'

function FOOTER() {
  return (
    <>
  <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">AutoBid</h3>
        <p className="text-gray-400 text-sm">
          Your trusted platform for automobile bidding. Find your dream car at the best price.
        </p>
      </div>
      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">Browse Cars</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">How It Works</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
        </ul>
      </div>
      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>Email: <a href="mailto:support@autobid.com" className="hover:text-white transition">support@autobid.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-890</a></li>
          <li>Address: 123 Auto Lane, Car City, USA</li>
        </ul>
      </div>
      {/* Social Media & Newsletter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" /></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C3.36 3.5 2 4.86 2 6.48v11.04c0 1.62 1.36 2.98 2.98 2.98h14.04c1.62 0 2.98-1.36 2.98-2.98V6.48c0-1.62-1.36-2.98-2.98-2.98H4.98zM9 10.5l3-3 3 3h-6zm3 2.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 8.25 12 8.25s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25z" /></svg>
          </a>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
          <div className="flex">
            <input type="email" placeholder="Your email" className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none text-sm" />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md text-sm hover:bg-blue-700 transition">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    {/* Bottom Bar */}
    <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
      <p>© 2025 AutoBid. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="text-gray-400 hover:text-white mx-2 transition">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="text-gray-400 hover:text-white mx-2 transition">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default FOOTER
