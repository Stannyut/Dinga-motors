import React from "react";
import { vehicles } from "../data/vehicles";
import { Link } from "react-router-dom"; // Link for navigation

const InventoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8">Our Inventory</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="vehicle-card bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                <p className="text-gray-600">Starting from</p>
                <p className="text-2xl font-bold text-primary">
                  ${vehicle.price}
                </p>
                <Link
                  to={`/vehicle/${vehicle.id}`}
                  className="mt-4 w-full bg-primary text-black py-2 rounded font-semibold hover:bg-yellow-400 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
