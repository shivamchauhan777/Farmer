import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Slide from './components/Slide'
import Feedback from "./components/Feedback";
import Signin from './components/Signin'
import Signup from './components/Signup'
import ShoppingCart from './components/ShoppingCart'
import UserPage from "./components/UserPage";
import Admin from "./components/Admin";
import Detail from './components/Detail'
import Contact from "./components/Contact";
import Market from "./components/Market";
import Farm from "./components/Farm";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
    <Router>
     <Navbar /> 
      <div className="h-screen flex m-0 p-0">
        {/* Sidebar on the left */}
        <Slide />
        {/* Right Section: Navbar + Content */}
        <div className="flex-1 m-0 p-0">

          {/* Main content area that changes based on the route */}
          <div className="p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/farms" element={<Farm />} />
              <Route path="/markets" element={<Market />} />
              {/* <Route path="/order" element={<OrderForm />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/feedback" element={<Feedback/>}/>
              <Route path="/signin" element={<Signin/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/cart" element={<ShoppingCart/>}/>
              <Route path="/user" element={<UserPage/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/detail" element={<Detail/>}/>
            </Routes>
          </div>
        </div>
      </div>
  
    </Router>
    </>
  );
};
export default App;