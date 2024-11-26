import React from "react";

const vehicles = [
  {
    id: 1,
    name: "Mercedes Sprinter",
    price: "45,000",
    image:
      "https://i.pinimg.com/236x/22/fb/78/22fb7858f90a79c917a4a2efae786ce1.jpg",
  },
  {
    id: 2,
    name: "Ford Transit",
    price: "38,000",
    image:
      "https://i.pinimg.com/enabled_lo_mid/236x/2c/54/db/2c54db0c28671074149b14dd6e9f2e02.jpg",
  },
  {
    id: 3,
    name: "Volkswagen Crafter",
    price: "42,000",
    image:
      "https://i.pinimg.com/enabled_lo_mid/236x/fd/b0/b0/fdb0b0929e0544ce7e4c3a5cbf1af8ac.jpg",
  },
  {
    id: 4,
    name: "Fiat Ducato",
    price: "36,000",
    image:
      "https://i.pinimg.com/236x/6f/d8/87/6fd887ac29f09479f73584458a0efc70.jpg",
  },
  {
    id: 5,
    name: "Renault Master",
    price: "37,500",
    image:
      "https://i.pinimg.com/736x/00/16/29/00162926127aa7a2322e946ebbb6cca6.jpg",
  },
  {
    id: 6,
    name: "Iveco Daily",
    price: "41,000",
    image:
      "https://i.pinimg.com/236x/1c/ce/52/1cce521b69a2c82066b9310ee02a36af.jpg",
  },
  {
    id: 7,
    name: "Peugeot Boxer",
    price: "35,000",
    image:
      "https://i.pinimg.com/236x/8a/bd/2a/8abd2afc801a79145e3e537948be4ecb.jpg",
  },
  {
    id: 8,
    name: "Citroen Relay",
    price: "34,500",
    image:
      "https://i.pinimg.com/474x/ba/2d/63/ba2d637640270973c1a5a3dc4cb6723d.jpg",
  },
];

const VehicleGrid = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h3 className="text-3xl font-bold mb-8">Featured Vehicles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">{vehicle.name}</h4>
              <p className="text-gray-600">Starting from</p>
              <p className="text-2xl font-bold text-primary">
                ${vehicle.price}
              </p>
              <button className="mt-4 w-full bg-primary text-black py-2 rounded font-semibold hover:bg-yellow-400">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleGrid;
