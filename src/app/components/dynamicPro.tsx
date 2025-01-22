'use client';

import React, { useEffect, useState } from "react";
import { fetchProducts, Product } from "../../sanity/lib/sanityClient";
import { useCart } from "../context/CartContext"; 
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      _id: product._id,
      name: product.title,
      price: product.price,
      image: product.imageUrl,
      quantity: 1
    });
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.tags && (
          <span className="absolute top-4 left-4  gree text-white text-xs font-medium px-3 py-1 rounded-full">
           {product.tags.slice(0, 5).join(', ')} {/* Display up to 5 tags as a comma-separated list */} 
          </span>
        )}
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
              title="Add to Cart"
            >
              <FiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'default'>('default');
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError("Failed to fetch products. Please try again later."); // Set error message
      }
    };

    fetchData();
  }, []);

  // Filter and Sort Logic
  useEffect(() => {
    let result = [...products];

    // Filter
    if (filter !== 'all') {
      result = result.filter(product => product.tags.includes(filter)); // Adjusted to check if tags include the filter
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [filter, sortBy, products]);

  // Get unique tags
  const uniqueTags: string[] = ['all', ...Array.from(new Set(products.flatMap(p => p.tags))).slice(0, 4)];
// Adjusted to flatten tags

  return (
    <div className="container mx-auto px-4 py-12">
      {error && <div className="text-red-500">{error}</div>} {/* Display error message */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Discover Our Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our carefully curated selection of furniture that combines style, comfort, and quality.
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex space-x-2">
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === tag 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'price-low' | 'price-high' | 'default')}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="default">Default Sorting</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
