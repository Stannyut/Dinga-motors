import React from "react";

const newsArticles = [
  {
    title: "2024 Mercedes-Benz Review",
    image:
      "https://i.pinimg.com/474x/c0/9d/41/c09d412f4ed2e7a57599e67ce6996379.jpg",
    description: "In-depth review of the latest Mercedes-Benz models",
  },
  {
    title: "Top Electric Vehicles",
    image:
      "https://i.pinimg.com/enabled_lo_mid/236x/0f/a1/09/0fa109f72b406f1a6d4c73217b338238.jpg",
    description: "Comprehensive guide to the best electric vehicles",
  },
  {
    title: "Classic Car Collection",
    image:
      "https://i.pinimg.com/236x/1c/ce/52/1cce521b69a2c82066b9310ee02a36af.jpg",
    description: "Exploring vintage and classic car collections",
  },
];

const News = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="mb-8">
        <h3 className="text-3xl font-bold mb-2">News & Reviews</h3>
        <p className="text-gray-600">
          Stay updated with the latest automotive news and expert reviews
        </p>
      </div>

      {/* News Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <button className="text-primary font-semibold hover:text-yellow-400">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
