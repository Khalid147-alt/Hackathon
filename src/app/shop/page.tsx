// app/shop/page.tsx
'use client';
import Image from 'next/image';

import Features from '../components/features';
import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import Breadcrumb from '../components/BreadCrumb';

const ShopPage = () => {
  const [sortBy, setSortBy] = useState('default');
  const [view, setView] = useState('grid');

  // Mock products data
  const products = [
    {
      id: 1,
      name: 'Asgaard sofa',
      category: 'Sofa',
      price: 2500.0,
      image: '/Asgaard sofa 3.png',
      isNew: true,
    },
    // Add more products here...
  ];

  // Mock special offers data
  const specialOffers = [
    {
      id: 1,
      name: 'Summer Sale',
      description: 'Get 20% off on all sofas',
      image: '/Asgaard sofa 3.png',
      href: '/offers/summer-sale',
    },
    {
      id: 2,
      name: 'Winter Wonders',
      description: 'Save big on winter furniture',
      image: '/Group 107.png',
      href: '/offers/winter-wonders',
    },
    {
      id: 3,
      name: 'Mask Group Offer',
      description: 'Exclusive deals on selected items',
      image: '/Mask Group.png',
      href: '/offers/mask-group',
    },
    // Add more special offers here...
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
        ]}
      />

      {/* Header Section */}
      <div className="flex justify-between items-center mt-8 mb-6">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold">Shop</h1>
          <span className="text-gray-500">Showing {products.length} results</span>
        </div>
        <div className="flex items-center space-x-4">
          {/* Sorting Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="default">Default sorting</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>

          {/* View Toggle Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 ${view === 'grid' ? 'text-yellow-500' : 'text-gray-500'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 ${view === 'list' ? 'text-yellow-500' : 'text-gray-500'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div
        className={`grid ${
          view === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'
        } gap-6`}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} view={view as 'grid' | 'list'} />
        ))}
      </div>

      {/* Special Offers Section */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Special Offers</h2>
          <p className="text-gray-500">Check out our latest deals and discounts!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialOffers.map((offer) => (
            <div key={offer.id} className="relative group">
              <div
                className="w-full h-64 bg-cover bg-center rounded-lg overflow-hidden"
                style={{ backgroundImage: `url(${offer.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={offer.href} className="text-white text-lg font-semibold">
                    View Offer
                  </a>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{offer.name}</h3>
                <p className="text-gray-500">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
