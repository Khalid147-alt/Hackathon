import { Trophy, CheckCircle, Truck, Headphones } from 'lucide-react'

const features = [
  {
    icon: Trophy,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: CheckCircle,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: Headphones,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-[#fdf7f2] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 group"
            >
              <div className="flex-shrink-0">
                <feature.icon 
                  className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110" 
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

