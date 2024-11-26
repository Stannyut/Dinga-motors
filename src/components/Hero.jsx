import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gray-900 flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl font-bold mb-4">Find Your Perfect Vehicle</h2>
          <p className="text-xl mb-8">15,000+ vehicles available</p>

          {/* Search Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Dropdowns */}
              <select className="p-2 border rounded">
                <option>All Makes</option>
              </select>
              <select className="p-2 border rounded">
                <option>All Models</option>
              </select>
              <select className="p-2 border rounded">
                <option>Price Range</option>
              </select>

              {/* Search Button */}
              <button className="bg-primary text-black py-2 px-4 rounded font-semibold hover:bg-yellow-400">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
