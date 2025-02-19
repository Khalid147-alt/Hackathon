export default function Features() {
    const features = [
      { icon: "fas fa-couch", title: "High Quality", description: "Crafted from top materials" },
      { icon: "fas fa-shield-alt", title: "Warranty Protection", description: "Over 2 years" },
      { icon: "fas fa-truck", title: "Free Shipping", description: "Order over $150" },
      { icon: "fas fa-headset", title: "24/7 Support", description: "Dedicated support" },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 py-12 bg-white">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-4 p-4 sm:p-6 bg-secondary rounded-lg shadow-md hover:scale-105 transition"
          >
            <i className={`${feature.icon} text-2xl sm:text-3xl text-primary`}></i>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    );
}
