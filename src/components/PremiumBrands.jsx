import React from "react";

const brands = [
  { name: "Honda", image: "/brands/honda.png", available: 430 },
  { name: "BMW", image: "/brands/bmw.png", available: 350 },
  { name: "Ford", image: "/brands/ford.png", available: 280 },
  { name: "Audi", image: "/brands/audi.png", available: 190 },
  { name: "Ferrari", image: "/brands/ferrari.png", available: 240 },
  { name: "Toyota", image: "/brands/toyota.png", available: 500 },
  { name: "Tesla", image: "/brands/tesla.png", available: 320 },
  { name: "Mercedes", image: "/brands/mercedes.png", available: 400 },
  { name: "Nissan", image: "/brands/nissan.png", available: 300 },
  { name: "Kia", image: "/brands/kia.png", available: 220 },
];

const PremiumBrands = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
        Explore Our Premium Brands
      </h2>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-white border rounded-lg shadow-md p-4 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            onClick={() => {
              // Placeholder for future navigation logic
              window.location.href = `/brand/${brand.name.toLowerCase()}`;
            }}
          >
            <img
              src="https://i.pinimg.com/236x/fa/49/dc/fa49dcaf6ae263e7e796590c6c610cd4.jpg"
              alt={brand.name}
              className="w-16 h-16 mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold">{brand.name}</h3>
            <p className="text-sm text-gray-500">{brand.available} Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumBrands;
