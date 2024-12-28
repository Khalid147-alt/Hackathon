"use client"
import React, { useState } from 'react';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    townCity: '',
    province: '',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('directBank');

  const cartItem = {
    name: 'Asgaard sofa',
    quantity: 1,
    price: 250000.00
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative h-48 bg-neutral-100">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4">
          <div className="pt-24">
            <h1 className="text-3xl font-semibold text-center">Checkout</h1>
            <div className="flex items-center justify-center gap-2 mt-2 text-sm">
              <a href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-800">Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Billing Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Billing details</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Company Name (Optional)</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Country / Region</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                >
                  <option value="Sri Lanka">Pakistan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">Street address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Town / City</label>
                <input
                  type="text"
                  name="townCity"
                  value={formData.townCity}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Province</label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                >
                  <option value="Western Province">Western Province</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">ZIP code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Additional information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-200 outline-none"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="mt-8 lg:mt-0">
            <div>
              <h3 className="text-lg font-medium mb-4">Product</h3>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">{cartItem.name} × {cartItem.quantity}</span>
                <span>Rs. {cartItem.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t border-b py-4 mb-4">
                <span className="font-medium">Subtotal</span>
                <span>Rs. {cartItem.price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="font-medium">Total</span>
                <span className="text-orange-500 font-semibold">Rs. {cartItem.price.toLocaleString()}</span>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="directBank"
                    name="paymentMethod"
                    value="directBank"
                    checked={paymentMethod === 'directBank'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4"
                  />
                  <label htmlFor="directBank" className="font-medium">Direct Bank Transfer</label>
                </div>
                {paymentMethod === 'directBank' && (
                  <p className="text-sm text-gray-600 ml-6">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                )}
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={paymentMethod === 'cashOnDelivery'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4"
                  />
                  <label htmlFor="cashOnDelivery" className="font-medium">Cash On Delivery</label>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                <a href="/privacy-policy" className="text-blue-600 hover:underline">
                  privacy policy
                </a>
                .
              </p>

              <button className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;