// components/Hero.tsx
import Image from "next/image";
import sofaImage from "../public/sofa.png"; // Replace with actual image path

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-secondary">
      <div className="space-y-6 md:w-1/2">
        <h1 className="text-4xl font-bold leading-tight">
          High-Quality Furniture Just For You
        </h1>
        <p className="text-gray-700">
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home.
        </p>
        <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition">
          Shop Now
        </button>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <Image
          src={sofaImage}
          alt="Sofa"
          className="rounded-lg shadow-lg"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
