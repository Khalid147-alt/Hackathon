import Image from "next/image";

const InstagramGallery = () => {
  // Array of image sources
  const images = [
    "/11.png",
    "/12.png",
    "/13.png",
    "/14.png",
    "/15.png",
    "/16.png",
    "/17.png",
    "/18.png",
  ];

  return (
    <div className="mt-24 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">#FurnitOfFurniture</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden group"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
