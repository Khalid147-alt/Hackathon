'use client';
import React, { useState } from 'react';

import Image from 'next/image'; // Import Image from next/image

const PrdCard: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [selectedColor, setSelectedColor] = useState<string>('blue');

  const thumbnailImages: string[] = [
    '/path/to/img1.jpg',
    '/path/to/img2.jpg',
    '/path/to/img3.jpg',
  ];

  const sizes: string[] = ['XS', 'S', 'M', 'L', 'XL'];
  const colors: string[] = ['blue', 'purple', 'gold'];

  return (
    <div className="container mx-auto p-4 lg:px-16">
      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/path/to/main-product.jpg"
              alt="Asgaard Sofa"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            {thumbnailImages.map((src, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-md overflow-hidden border border-gray-200"
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold">Asgaard Sofa</h1>
          <p className="text-lg text-gray-500 mt-2">Rs. 250,000.00</p>
          <div className="flex items-center mt-4">
            <div className="text-yellow-500 text-lg flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>&#9733;</span> // Star rating
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">
              (5 Customer Reviews)
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Options */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Size</h3>
            <div className="flex space-x-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? 'border-black text-black'
                      : 'border-gray-300 text-gray-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div className="mt-6">
            <h3 className="text-sm font-medium">Color</h3>
            <div className="flex space-x-4 mt-2">
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectedColor === color ? 'ring-2 ring-black' : ''
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center mt-6 space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Add To Cart
            </button>
            <button className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300">
              Compare
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-500">
            <p>
              <span className="font-medium">SKU:</span> SS001
            </p>
            <p>
              <span className="font-medium">Category:</span> Sofas
            </p>
            <p>
              <span className="font-medium">Tags:</span> Sofa, Chair, Home, Shop
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="flex space-x-4 border-b border-gray-300">
          <button className="text-black pb-2 border-b-2 border-black">
            Description
          </button>
          <button className="text-gray-500 pb-2">Additional Information</button>
          <button className="text-gray-500 pb-2">Reviews [5]</button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the
            Kilburn portable active stereo speaker takes the unmistakable look
            and sound of Marshall, unplugs the chords, and takes the show on the
            road.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrdCard;
