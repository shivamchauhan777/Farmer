import React from "react";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "Oragnic Potatoes",
    price: "₹20/kg",
    image: "https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    price: "₹40/kg",
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Green Spinach",
    price: "₹25/bunch",
    image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    name: "Farm Apples",
    price: "₹90/kg",
    image: "https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Fresh Bananas",
    price: "₹40/dozen",
    image: "https://images.pexels.com/photos/365810/pexels-photo-365810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "Fresh Grapes",
    price: "₹70/kg",
    image: "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    name: "Mangoes",
    price: "₹80/kg",
    image: "https://images.pexels.com/photos/8446853/pexels-photo-8446853.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 8,
    name: "Farm Pomegranate",
    price: "₹150/kg",
    image: "https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Market = () => {
  return (
  <>
    <section className="py-12 px-6 bg-gray-400 min-h-screen" id="market">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-800">Fresh from the Farm</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-green-700">{item.name}</h3>
            <p className="text-md text-gray-600">{item.price}</p>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </>
  );
};

export default Market;
