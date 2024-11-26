import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // For dynamic routing
import Header from "../components/Header"; // Import Header component
import { vehicles } from "../data/vehicles"; // Import vehicles data

const VehicleDetails = () => {
  const { id } = useParams(); // Get the vehicle ID from the route params
  const navigate = useNavigate();

  const vehicle = vehicles.find((v) => v.id === parseInt(id));

  // Redirect to home if the vehicle is not found
  if (!vehicle) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Vehicle Image */}
            <div className="vehicle-image">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Vehicle Info */}
            <div className="vehicle-info space-y-6">
              <h1 className="text-4xl font-bold">{vehicle.name}</h1>
              <p className="text-3xl font-bold text-primary">
                ${vehicle.price}
              </p>

              {/* Specifications */}
              <div className="specs-grid grid grid-cols-2 gap-4">
                <div className="spec-item p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold">Engine</h3>
                  <p>2.0L Turbo</p>
                </div>
                <div className="spec-item p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold">Power</h3>
                  <p>250 HP</p>
                </div>
                <div className="spec-item p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold">0-60 mph</h3>
                  <p>6.5s</p>
                </div>
                <div className="spec-item p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold">MPG</h3>
                  <p>25 city / 32 hwy</p>
                </div>
              </div>

              {/* Schedule Test Drive Button */}
              <button className="w-full bg-primary text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                Schedule Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
