'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "../context/CartContext"
import { FiShoppingCart, FiHeart } from "react-icons/fi"
import Descriptions from "../components/Description"



interface Product {
  _id: string
  name: string
  price: number
  image: string
  badge?: string | null
 
}

const Shop = () => {
  const { addToCart } = useCart()

  const products: Product[] = [
    {
      _id: "1",
      name: "Syltherine",
      price: 278,
      image: "/nn1.png", 
      badge: "Sale",
      
      
    },
    {
      _id: "2",
      name: "Leviosa",
      price: 200,
      image: "/nn2.png",
      badge: null,
     
    },
    {
      _id: "3",
      name: "Lolito",
      price: 2500,
      image: "/nn3.png",
      badge: "New",
    
    },
    {
      _id: "4",
      name: "Respira",
      price: 250,
      image: "/nn4.jpeg",
      badge: "Hot",
      
    },
  ]

  const handleAddToCart = (product: Product) => {
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Image */}
      <div className="relative">
        <Image
          src="/n1.jpeg"
          alt="Shop Banner"
          layout="responsive"
          width={1920}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Shop</h1>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm text-gray-500">Home / Shop</p>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between bg-gray-100 rounded-md">
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm font-medium rounded-md">
            Filter
          </button>
          <p className="text-sm text-gray-600">Showing 1–4 of 12 results</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">Show:</p>
          <select className="block w-20 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm">
            <option>4</option>
            <option>8</option>
            <option>12</option>
          </select>
          <p className="text-sm text-gray-600">Sort by:</p>
          <select className="block w-40 bg-white border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg overflow-hidden group relative"
          >
            {/* Product Image */}
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-52 object-cover group-hover:opacity-75 transition-opacity"
              />
              {product.badge && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium py-1 px-2 rounded-md">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                ${product.price.toLocaleString()}
              </p>

              {/* Creator Information */}
             
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-white text-sm text-gray-700 py-2 px-4 rounded-md shadow hover:bg-gray-100 flex items-center"
                >
                  <FiShoppingCart className="mr-2" /> Add to Cart
                </button>
                <button 
                  className="bg-white text-sm text-gray-700 py-2 px-4 rounded-md shadow hover:bg-gray-100"
                >
                  <FiHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      

      {/* Pagination */}
      <div className="container mx-auto px-4 py-6 flex justify-center gap-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
          1
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 rounded-md shadow border hover:bg-gray-100">
          2
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 rounded-md shadow border hover:bg-gray-100">
          3
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">

          Next
        </button>
      </div>
      
      <Descriptions />
      

    </div>
  );
};

export default Shop;