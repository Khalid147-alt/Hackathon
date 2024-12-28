import Image from 'next/image';
import { Badge } from './ui/badges';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    image: string;
    price: number;
    view?: string; // Added view property
  };
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">{product.category}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <Badge>New</Badge>
        </div>
      </div>
    </div>
  );
};
