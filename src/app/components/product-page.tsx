import Image from "next/image";
import { ProductCard } from "./ProductCard";
import Button from "./ui/button"; // Fixed Button import
import InstagramGallery from "./instagalery";

export default function ProductsPage() {
const products = [
  {
    id: 1,
    name: "Syltherine",
    price: 22500000,
    image: "/01.png?height=400&width=400",
    status: "Available",
    tag: "new" as const,
    category: "Furniture",
    isNew: true
  },
  {
    id: 2,
    name: "Leviozia",
    price: 35000000,
    originalPrice: 40000000,
    image: "/02.png?height=400&width=400",
    status: "Available",
    tag: "sale" as const,
    category: "Furniture",
    isNew: false
  },
  {
    id: 3,
    name: "Lolita",
    price: 55000000,
    image: "/04.png?height=400&width=400",
    status: "Available",
    tag: "new" as const,
    category: "Furniture",
    isNew: true
  },
  {
    id: 4,
    name: "Serenity",
    price: 65000000,
    image: "/05.jpeg?height=400&width=400",
    status: "Available",
    tag: "new" as const,
    category: "Furniture",
    isNew: true
  },
  {
    id: 5,
    name: "Style",
    price: 15000000,
    image: "/06.png?height=400&width=400",
    status: "Available",
    category: "Furniture",
    isNew: false
  },
  {
    id: 6,
    name: "Muggo",
    price: 80000,
    image: "/07.png?height=400&width=400",
    status: "Available",
    tag: "new" as const,
    category: "Furniture",
    isNew: true
  },
  {
    id: 7,
    name: "Pingky",
    price: 2000000,
    image: "/08.jpeg?height=400&width=400",
    status: "Available",
    tag: "sale" as const,
    category: "Furniture",
    isNew: false
  },
  {
    id: 8,
    name: "Potty",
    price: 500000,
    image: "/09.jpeg?height=400&width=400",
    status: "Available",
    tag: "new" as const,
    category: "Furniture",
    isNew: true
  }
];

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
{products.map((product) => (
  // Pass the entire product object as a prop
  <ProductCard key={product.name} product={product} view="grid" />
))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-12">
<Button>
  Show More
</Button>
      </div>

      {/* Inspiration Section */}
      <div className="mt-24">
        <div className="relative rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">50+ Beautiful rooms inspiration</h2>
              <p className="text-muted-foreground mb-6">
                Our designer already made a lot of beautiful prototype of rooms that inspire you
              </p>
              <Button className="w-fit">Explore More</Button>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/10.png?height=600&width=800"
                alt="Beautiful room inspiration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <InstagramGallery />
    </div>
  );
}
