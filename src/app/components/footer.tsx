import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white px-4 sm:px-8 py-12 border-t">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-black">Funiro.</h2>
          <p className="text-gray-600">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

       
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-black">Links</h3>
          <ul className="space-y-1 text-gray-700">
            <li className="hover:text-primary cursor-pointer transition">Home</li>
            <li className="hover:text-primary cursor-pointer transition">Shop</li>
            <li className="hover:text-primary cursor-pointer transition">About</li>
            <li className="hover:text-primary cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-black">Help</h3>
          <ul className="space-y-1 text-gray-700">
            <li className="hover:text-primary cursor-pointer transition">Payment Options</li>
            <li className="hover:text-primary cursor-pointer transition">Returns</li>
            <li className="hover:text-primary cursor-pointer transition">Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-black">Newsletter</h3>
          <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="py-2 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

    
      <div className="mt-8 border-t pt-4 text-gray-500 text-sm">
        © 2023 Funiro. All rights reserved.
      </div>
    </footer>
  );
}
