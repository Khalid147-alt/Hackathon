'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi'

const CartPage: React.FC = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice,
    getTotalItems 
  } = useCart()

  const handleQuantityIncrease = (productId: string) => {
    updateQuantity(productId, (cart.find(item => item._id === productId)?.quantity || 0) + 1)
  }

  const handleQuantityDecrease = (productId: string) => {
    const currentQuantity = cart.find(item => item._id === productId)?.quantity || 0
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1)
    } else {
      removeFromCart(productId)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center pt-[100px]">
        <h1 className="text-3xl font-bold mb-4 ">Your Cart is Empty</h1>
        <p className="mb-6 text-gray-600">
          Looks like you haven&rsquo;t added any items to your cart yet.
        </p>
        <Link 
          href="/shop" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items Column */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          {cart.map((item) => (
            <div 
              key={item._id} 
              className="flex items-center border-b py-4 hover:bg-gray-50 transition"
            >
              {/* Product Image */}
              <div className="w-24 h-24 relative mr-4">
                <Image
                  src={item.image || '/placeholder.jpg'}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>

              {/* Product Details */}
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded">
                  <button 
                    onClick={() => handleQuantityDecrease(item._id)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <FiMinus />
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityIncrease(item._id)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    <FiPlus />
                  </button>
                </div>

                {/* Item Total */}
                <div className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove Item */}
                <button 
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FiTrash2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}

          {/* Continue Shopping Link */}
          <div className="mt-6">
            <Link 
              href="/shop" 
              className="text-blue-500 hover:text-blue-600 flex items-center"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary Column */}
        <div className="bg-gray-100 p-6 rounded-lg h-fit">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{getTotalItems()}</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Link 
            href="/checkout"
            className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 inline-block text-center hover:bg-blue-600 transition"
          >
            Proceed to Checkout
          </Link>

          {/* Payment Methods */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">We Accept</p>
            <div className="flex justify-center space-x-4">
              {/* Add payment method icons */}
              <Image 
                src="/visa.svg" 
                alt="Visa" 
                width={40} 
                height={24} 
              />
              <Image 
                src="/mastercard.svg" 
                alt="Mastercard" 
                width={40} 
                height={24} 
              />
              <Image 
                src="/paypal.svg" 
                alt="PayPal" 
                width={40} 
                height={24} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage;
