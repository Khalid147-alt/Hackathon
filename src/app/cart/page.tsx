'use client';
import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { Trash2 } from 'lucide-react';
import Image from 'next/image'; // Import Image from next/image

const CartPage = () => {
  const cartItem = {
    name: 'Asgaard sofa',
    price: 250000.0,

    quantity: 1,
    image: '/mainimgcp.jpeg',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative h-48 bg-neutral-100">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4">
          <div className="pt-24">
            <h1 className="text-3xl font-semibold text-center">Cart</h1>
            <div className="flex items-center justify-center gap-2 mt-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
              <span className="text-gray-400">&gt;</span>
              <span className="text-gray-800">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-50 p-4 mb-4 hidden md:grid md:grid-cols-4 md:gap-4">
              <div className="font-medium">Product</div>
              <div className="font-medium">Price</div>
              <div className="font-medium">Quantity</div>
              <div className="font-medium">Subtotal</div>
            </div>

            {/* Cart Item */}
            <div className="bg-white border rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 relative">
                    <Image
                      src="/Asgaard sofa 3.png"
                      width={200}
                      height={200}
                      alt={cartItem.name}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{cartItem.name}</h3>
                  </div>
                </div>

                <div className="md:text-center">
                  <span className="md:hidden font-medium">Price: </span>
                  Rs. {cartItem.price.toLocaleString()}
                </div>

                <div className="flex items-center md:justify-center">
                  <span className="md:hidden font-medium">Quantity: </span>
                  <input
                    type="number"
                    min="1"
                    value={cartItem.quantity}
                    onChange={() => {}}
                    className="w-16 px-2 py-1 border rounded-md text-center"
                  />
                </div>

                <div className="flex items-center justify-between md:justify-center gap-2">
                  <div>
                    <span className="md:hidden font-medium">Subtotal: </span>
                    Rs. {(cartItem.price * cartItem.quantity).toLocaleString()}
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="mt-8 lg:mt-0">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b">
                  <span className="font-medium">Subtotal</span>
                  <span>Rs. {cartItem.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-4">
                  <span className="font-medium">Total</span>
                  <span className="text-lg text-orange-500 font-semibold">
                    Rs. {cartItem.price.toLocaleString()}
                  </span>
                </div>
                <a href="/checkout">
                  <button className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                    Check Out
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
