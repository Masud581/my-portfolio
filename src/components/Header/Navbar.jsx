import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png'; // Adjust the path to your logo image

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-purple-900 to-gray-800 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full border-2 border-white" />
          
          {/* Enhanced Name Styling */}
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-pink-500">
            Ebne Masud
          </h1>
        </motion.div>
        
        {/* Navbar Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#hero" className="text-gray-300 hover:text-indigo-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-300 hover:text-indigo-400 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-indigo-400 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="text-gray-300 hover:text-indigo-400 transition duration-300">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
