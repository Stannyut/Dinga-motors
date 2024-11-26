import React from "react";

const stats = [
  { value: "15,000+", description: "Vehicles Available" },
  { value: "1500+", description: "Happy Customers" },
  { value: "500+", description: "Dealerships" },
  { value: "24/7", description: "Customer Support" },
];

const Stats = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h4 className="text-4xl font-bold text-primary transition duration-300 ease-in-out hover:scale-110">
                {stat.value}
              </h4>

              <p className="mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
