"use client"
import React, { useState } from 'react';

const Descriptions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-300 pb-2">
        {['Description', 'Additional Information', 'Reviews [5]'].map((tab, index) => (
          <button
            key={index}
            className={`text-lg font-medium ${
              activeTab === tab.toLowerCase() ? 'border-b-2 border-black' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'description' && (
          <div>
            <p className="text-gray-700 leading-relaxed">
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker
              takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on
              the road.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering.
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with well-balanced audio which boasts a clear midrange and extended highs
              for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune
              the controls to your personal preferences while the guitar-influenced leather strap enables
              easy and stylish travel.
            </p>
          </div>
        )}
        {activeTab === 'additional information' && (
          <p className="text-gray-700 leading-relaxed">Additional product information will be here.</p>
        )}
        {activeTab === 'reviews [5]' && (
          <p className="text-gray-700 leading-relaxed">Customer reviews will be displayed here.</p>
        )}
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <img
          src="/Mask group (4).png" 
          alt="Product 1"
          className="rounded-lg"
        />
        <img
          src="/Mask group.png" 
          alt="Product 2"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Descriptions;
