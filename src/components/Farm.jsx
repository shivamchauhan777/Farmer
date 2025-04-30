import React from 'react';
import Footer from './Footer';

const Farm = () => {
  const farms = [
    {
      name: "Green Valley Farm",
      image: "https://images.pexels.com/photos/1462892/pexels-photo-1462892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Punjab, India",
      products: "Tomatoes, Wheat, Corn",
    },
    {
      name: "Fresh Roots Farm",
      image: "https://images.pexels.com/photos/17497507/pexels-photo-17497507/free-photo-of-a-small-plant-sprouting-from-the-soil.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Uttar Pradesh, India",
      products: "Spinach, Carrots, Onions",
    },
    {
      name: "Nature's Nest",
      image: "https://images.pexels.com/photos/13882947/pexels-photo-13882947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
      location: "Haryana, India",
      products: "Apples, Oranges, Bananas",
    },
  ];

  return (
<>
<div className="p-6 bg-gray-400 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-green-800">
        Meet Our Farms 🌾
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {farms.map((farm, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-105 duration-300"
          >
            <img
              src={farm.image}
              alt={farm.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-green-700">
                {farm.name}
              </h2>
              <p className="text-gray-600 text-sm mt-2">📍 {farm.location}</p>
              <p className="text-gray-800 mt-3">
                <span className="font-medium">Products:</span> {farm.products}
              </p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                View Farm
              </button>
            </div>
          </div>
        ))}
      </div>
     
    </div>
     <Footer />

</>
  );
};

export default Farm;
