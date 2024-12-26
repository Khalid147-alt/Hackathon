import Image from "next/image"
import { Badge } from "./ui/badges"
import { cn } from "./lib/utilis"

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    isNew: boolean;
  };
  originalPrice?: number;
  status?: string;
  tag?: "sale" | "new";
  view: "grid" | "list";
}

export function ProductCard({
  product,
  originalPrice,
  status = "Available",
  tag,
  view
  
}: ProductCardProps) {
  const { id, name, price, image, isNew } = product;

  return (
    <div className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {tag && (
          <Badge
            className={cn(
              "absolute top-2 right-2",
              tag === "sale" ? "bg-red-500" : "bg-teal-500"
            )}
          >
            {tag === "sale" ? "Sale" : "New"}
          </Badge>
        )}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-medium">{name}</h3>
        <div className="flex items-center gap-2">
          <p className="font-semibold">Rp {price.toLocaleString()}</p>
          {originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              Rp {originalPrice.toLocaleString()}
            </p>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{status}</p>
      </div>
    </div>
  )
}

