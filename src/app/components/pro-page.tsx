import Image from "next/image";

const ImageContainer = () => {
  const images = [
    { src: "/Mask Group (2).png", alt: "Image 1", name: "Dining" }, 
    { src: "/Image-living room.png", alt: "Image 2", name: "Living" },
    { src: "/Mask Group (3).png", alt: "Image 3", name: "Bedroom" },
  ];

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center border border-white bg-white p-6 rounded-lg shadow-lg">
   
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
       Browse The Range
      </h1>

      
      <p className="text-gray-600 text-sm text-center mb-8">
       Get Top Brands of Pakistan
      </p>

      
      <div className="flex justify-between w-full">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <Image
              src={image.src}
              priority={image.src === "/Image-living room.png"} 
              alt={image.alt}
              width={300}
              height={200} 
              className="rounded-lg shadow-md"
              style={{ width: "auto" }} 
            />
            <p className="mt-4 text-lg font-semibold text-gray-700">{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
