'use client';
import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image

const Descriptions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-300 pb-2">
        {['Description', 'Additional Information', 'Reviews [5]'].map(
          (tab, index) => (
            <button
              key={index}
              className={`text-lg font-medium ${
                activeTab === tab.toLowerCase()
                  ? 'border-b-2 border-black'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'description' && (
          <div>
            <p className="text-gray-700 leading-relaxed">
              Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the
              Kilburn portable active stereo speaker takes the unmistakable look
              and sound of Marshall, unplugs the chords, and takes the show on
              the road.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
           Decsription
            </p>
          </div>
        )}
        {activeTab === 'additional information' && (
          <p className="text-gray-700 leading-relaxed">
            We are lonchint it soon, so stay tuned!
          </p>
        )}
        {activeTab === 'reviews [5]' && (
          <p className="text-gray-700 leading-relaxed">
            Reviews
          </p>
        )}
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Image
          src="/Mask group (4).png"
          alt="Product 1"
          width={600}
          height={600}
          className="rounded-lg"
        />
        <Image
          src="/Mask group.png"
          alt="Product 2"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Descriptions;
