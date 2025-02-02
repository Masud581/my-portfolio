import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import profileImage from '../../assets/hero.jpg.jpg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto flex items-center justify-between px-8 lg:px-32">
        {/* Section 1: Text Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-md mb-4 font-sans"
            >
              Hi, I'm Ebne Masud
            </motion.h1>
            <div className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-teal-400 drop-shadow-sm mt-2 font-sans">
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  2000,
                  'App Developer',
                  2000,
                  'Learning DevOps',
                  2000,
                  
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8 mt-4 font-sans"
            >
              A passionate developer building amazing web experiences.
            </motion.p>

            {/* Buttons */}
            <div className="flex space-x-4">
              {/* Download Resume Button */}
              <motion.a
                href="../../assets/Ebne_Masud_Resume.pdf"
                download="Resume.pdf"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </motion.a>

              {/* Scroll Down Button */}
              <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaArrowDown className="mr-2" />
                Scroll Down
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Image */}
        <div className="flex-wrap flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-96 h-96 rounded-full object-cover border-8 border-gradient-to-r from-pink-400 to-blue-400 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
