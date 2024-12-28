import Link from "next/link";
import Image from "next/image";
const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Syltherine",
      price: "Rp 2.500.000",
      image: "/nn1.png",
      badge: "Sale",
    },
    {
      id: 2,
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "/nn2.png",
      badge: null,
    },
    {
      id: 3,
      name: "Lolito",
      price: "Rp 2.500.000",
      image: "/nn3.png",
      badge: "New",
    },
    {
      id: 4,
      name: "Respira",
      price: "Rp 2.500.000",
      image: "/nn4.jpeg",
      badge: "Hot",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <div className="bg-white shadow-md rounded-lg overflow-hidden group relative cursor-pointer">
          
            <Image
              src={product.image}
              alt={product.name}
              width={400} 
              height={400} 
              className="w-full h-52 object-cover group-hover:opacity-75 transition-opacity"
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
        </Link>
      ))}
    </div>
  );
};

export default Shop;
