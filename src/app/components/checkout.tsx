import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white shadow-md rounded-lg w-full max-w-6xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Checkout</h1>
          <p className="text-sm text-gray-500 mt-1">Home / Checkout</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 p-6">
          {/* Billing Details */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              Billing Details
            </h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country / Region
                </label>
                <select
                  id="country"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Pakistan</option>
                  <option>United States</option>
                  <option>India</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Town / City
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-gray-700"
                >
                  Province
                </label>
                <select
                  id="province"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Sindh</option>
                  <option>Punjab</option>
                  <option>Balochistan</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Information
                </label>
                <textarea
                  id="notes"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-medium text-gray-700 mb-4">
              Order Summary
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <ul className="divide-y divide-gray-200 mb-4">
                <li className="py-3 flex justify-between">
                  <span>Product</span>
                  <span className="font-medium">Rs. 250,000.00</span>
                </li>
                <li className="py-3 flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">Rs. 250,000.00</span>
                </li>
                <li className="py-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span>Rs. 250,000.00</span>
                </li>
              </ul>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <div className="space-y-2">
                  <div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="bank"
                      className="focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <label
                      htmlFor="bank"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Direct Bank Transfer
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      id="cash"
                      className="focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <label
                      htmlFor="cash"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md shadow">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
