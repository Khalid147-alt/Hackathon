// app/shop/[slug]/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from 'src/app/components/BreadCrumb';

const ProductDetail = ({ params }: { params: { slug: string } }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data
  const product = {
    name: 'Asgaard sofa',
    price: 2500.00,
    description: 'Setting the bar as one of our most popular and aesthetically pleasing pieces, the Asgaard sofa is influenced by modern Nordic design...',
    sku: '1234',
    category: 'Sofa',
    tags: ['Sofa', 'Chair', 'Home'],
    dimensions: {
      length: '200cm',
      width: '90cm',
      height: '85cm'
    },
    images: ['/Asgaard sofa 3.png', '/Asgaard sofa 3.png', '/Asgaard sofa 3.png'],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: product.name, href: '#' }
      ]} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover rounded-lg cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-2xl text-yellow-600">${product.price.toFixed(2)}</p>

          <div className="space-y-4">
            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  className="w-16 text-center focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button className="px-8 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
                Add to cart
              </button>
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <p><span className="font-semibold">SKU:</span> {product.sku}</p>
            <p><span className="font-semibold">Category:</span> {product.category}</p>
            <p><span className="font-semibold">Tags:</span> {product.tags.join(', ')}</p>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-16">
        <div className="border-b">
          <div className="flex space-x-8">
            {['description', 'additional', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 -mb-px ${
                  activeTab === tab
                    ? 'border-b-2 border-yellow-500 font-semibold'
                    : 'text-gray-500'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="py-8">
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>
          )}
          {activeTab === 'additional' && (
            <div className="space-y-4">
              <h3 className="font-semibold">Dimensions</h3>
              <ul className="list-disc list-inside">
                <li>Length: {product.dimensions.length}</li>
                <li>Width: {product.dimensions.width}</li>
                <li>Height: {product.dimensions.height}</li>
              </ul>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>
              <p>No reviews yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
