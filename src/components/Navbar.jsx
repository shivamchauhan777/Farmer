import { useState } from 'react';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-900 p-3 text-white flex justify-between items-center relative z-50">
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" height={40} width={50} className="inline mt-2 ml-4" />
        <span className="lg:text-3xl ml-2 sm:text-md md:text-xl">Farmer</span>
      </div>
      <div className="md:hidden">
        <button className="text-xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      <div
        className={`absolute md:static top-16 right-0 w-30 md:w-auto bg-gray-900 md:flex p-4 md:p-0 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-end w-full md:space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block md:inline-block px-4 py-2 lg:text-xl sm:text-md md:text-lg ${isActive ? "text-green-600 font-bold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/farms"
            className={({ isActive }) =>
              `block md:inline-block px-4 py-2 lg:text-xl sm:text-md md:text-lg ${isActive ? "text-green-600 font-bold" : ""
              }`
            }
          >
            Farms
          </NavLink>
          <NavLink
            to="/markets"
            className={({ isActive }) =>
              `block md:inline-block px-4 py-2 lg:text-xl sm:text-md md:text-lg ${isActive ? "text-green-600 font-bold" : ""
              }`
            }
          >
            Markets
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block md:inline-block px-4 py-2 lg:text-xl sm:text-md md:text-lg ${isActive ? "text-green-600 font-bold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;