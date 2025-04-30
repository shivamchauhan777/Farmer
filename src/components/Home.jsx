// import Footer from "./Footer";
// const Home = () => {
//   return (
//     <>

//       <main className="bg-[url(/images/bgimage.jpg)] bg-cover bg-center opacity-95 text-white  border-red-500 h-full md:h-screen">
//         {/* Hero Section */}
//         <div className="bg-gray-400 opacity-80 h-full text-green-900 flex flex-col items-center justify-center">
//           <section className="text-center py-16 px-4 ">
//             <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to FarmFresh</h1>
//             <p className="text-black max-w-md mx-auto">
//               Connecting you with fresh, local produce directly from our farmers.
//             </p>
//           </section>

//           {/* About Section */}
//           <section className="py-16 px-4">
//             <div className="max-w-3xl mx-auto">
//               <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
//               <p className="text-black pl-10">
//                 At FarmFresh, our mission is to support local farmers by providing
//                 a platform where they can sell their fresh produce directly to you.
//                 We believe in fair prices, sustainable farming, and building a strong
//                 community around healthy, farm-to-table foods.
//               </p>
//             </div>
//           </section>

//           {/* Services Section */}
//           <section className="py-16 px-4">
//             <div className="max-w-7xl mx-auto pl-5">
//               <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 <div className="bg-gray-800 p-6 rounded-lg text-center">
//                   <h3 className="text-xl font-semibold text-green-400 mb-2">
//                     Fresh Produce
//                   </h3>
//                   <p className="text-white">
//                     Organic fruits and vegetables, straight from the farm to your table.
//                   </p>
//                 </div>
//                 <div className="bg-gray-800 p-6 rounded-lg text-center">
//                   <h3 className="text-xl font-semibold text-green-400 mb-2">
//                     Direct Connection
//                   </h3>
//                   <p className="text-white">
//                     Connect directly with farmers and learn about their sustainable practices.
//                   </p>
//                 </div>
//                 <div className="bg-gray-800 p-6 rounded-lg text-center">
//                   <h3 className="text-xl font-semibold text-green-400 mb-2">
//                     Fair Prices
//                   </h3>
//                   <p className="text-white">
//                     Enjoy affordable, fair prices on all products, ensuring farmers are paid fairly.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>

//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ darkMode }) => {
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/home2.jpeg')]">
          <div className={`absolute inset-0 bg-black/60`} />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Welcome to Farm to Market
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8"
          >
            Connecting farmers directly with consumers for fresh, sustainable produce.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/farms" 
              className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Farms
            </Link>
            <Link 
              to="/markets" 
              className={`px-8 py-3 bg-gray-800 text-white hover:bg-gray-700 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              Find Markets
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`py-20 bg-gray-800`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4`}>
              Why Choose Farm to Market?
            </h2>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto`}>
              Experience the benefits of direct farm-to-consumer connections
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Fresh Produce",
                description: "Get the freshest produce directly from local farms"
              },
              {
                icon: "💰",
                title: "Better Prices",
                description: "Save money by eliminating middlemen"
              },
              {
                icon: "🌍",
                title: "Sustainable",
                description: "Support local agriculture and reduce carbon footprint"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{feature.title}</h3>
                <p className={'text-gray-300'}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`bg-gray-900 py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Start Your Farm-to-Market Journey?
          </h2>
          <Link 
            to="/signup" 
            className={`inline-block px-8 py-3 bg-green-600 text-white hover:bg-green-700 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;