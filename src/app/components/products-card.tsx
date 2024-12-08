import Image from "next/image"
import  { Badge}  from "./ui/badges"
import { cn } from "./lib/utilis";

// Ensure cn is callable
if (typeof cn !== 'function') {
  throw new Error('cn is not a function');
}

interface ProductCardProps {
  name: string
  price: number
  originalPrice?: number
  image: string
  status?: string
  tag?: "sale" | "new"
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  status = "Available",
  tag
}: ProductCardProps) {
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
  className={
    tag === "sale" ? "absolute top-2 right-2 bg-red-500" : "absolute top-2 right-2 bg-teal-500"
  }
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

