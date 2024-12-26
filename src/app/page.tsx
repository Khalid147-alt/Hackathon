import React from 'react';
import Image from 'next/image';

import Features from './components/features';
import { ProductCard } from './components/ProductCard';
import ProductsPage from './components/product-page';
import Breadcrumb from './components/BreadCrumb';

export default function Home() {
  return (
    <>
    <main className="min-h-screen w-full relative">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-[url('/homeimg.jpeg')] bg-cover bg-center z-[-1]"
    aria-hidden="true"
  ></div>

  {/* Main Content */}
  <div className="container mx-auto grid lg:grid-cols-2 min-h-screen items-center gap-8 px-4">
    {/* Left Side */}
    <div className="relative w-full h-[500px] lg:h-[800px]">
      <Image
        src="/placeholder.svg?height=800&width=800"
        alt="Modern furniture setting with rattan chair and palm plant"
        fill
        className="object-cover rounded-2xl"
        priority
      />
    </div>

    {/* Right Side */}
    <div className="bg-[#fff5e6] p-8 lg:p-16 rounded-2xl shadow-xl">
      <span className="text-sm uppercase tracking-wider text-[#8B6D3F]">
        New Arrival
      </span>

      <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-[#B08D57]">
        Discover Our
        <br />
        New Collection
      </h1>

      <p className="text-gray-600 mb-8 max-w-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>

      <button
        className="bg-[#B08D57] text-white px-8 py-3 rounded-lg transition-all duration-300 ease-out hover:bg-[#8B6D3F] hover:shadow-lg active:transform active:scale-95"
      >
        BUY NOW
      </button>
    </div>
  </div>
   
</main>

<ProductsPage />


    </>
  );
}
