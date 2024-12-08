import React from "react";

const ProductDetails = () => {
  const relatedProducts = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      image: "/nn1.png", // Replace with actual image URLs
      badge: "Sale",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "/nn2.png",
      badge: null,
    },
    {
      name: "Lolito",
      price: "Rp 2.500.000",
      image: "/nn3.png",
      badge: "New",
    },
    {
      name: "Respira",
      price: "Rp 2.500.000",
      image: "/nn4.jpeg",
      badge: "Hot",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <p className="text-sm text-gray-500">Home / Shop / Asgaard sofa</p>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <div className="mb-4">
            <img
              src="/Asgaard sofa 3.png" // Replace with the main product image
              alt="Asgaard sofa"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-2">
            <img
              src="/111.png" 
              alt="Thumbnail"
              className="w-20 h-20 object-cover rounded-lg cursor-pointer"
            />
            <img
              src="/222.png" 
              alt="Thumbnail"
              className="w-20 h-20 object-cover rounded-lg cursor-pointer"
            />
            <img
              src="/333.png" 
              alt="Thumbnail"
              className="w-20 h-20 object-cover rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Asgaard sofa
          </h1>
          <div className="flex items-center mt-2">
            <div className="text-yellow-500 flex items-center">
              ★★★★☆
            </div>
            <p className="text-sm text-gray-500 ml-2">(4 Reviews)</p>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-4">Rp 2.500.000</p>

          <p className="text-sm text-gray-600 mt-4">
            A modern and elegant sofa design for your living room.
          </p>

          {/* Variants */}
          <div className="mt-6">
            <p className="text-sm font-medium text-gray-600 mb-2">Colors:</p>
            <div className="flex items-center gap-2">
              <button className="w-6 h-6 rounded-full bg-blue-500"></button>
              <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
              <button className="w-6 h-6 rounded-full bg-red-500"></button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-gray-600 mb-2">Sizes:</p>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
                Small
              </button>
              <button className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
                Medium
              </button>
              <button className="px-4 py-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
                Large
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex border-b">
          <button className="px-4 py-2 text-gray-700 border-b-2 border-blue-600">
            Description
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
            Additional Information
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
            Reviews (4)
          </button>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            This sofa is made from high-quality materials, ensuring durability
            and comfort. It's perfect for modern interiors.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden group relative"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover group-hover:opacity-75 transition-opacity"
              />
              {product.badge && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium py-1 px-2 rounded-md">
                  {product.badge}
                </span>
              )}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
