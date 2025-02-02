import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 lg:px-16">
        
        {/* Text Section */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-white mb-8 font-sans"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-4 leading-relaxed font-sans"
          >
            Hi, I'm <span className="font-bold text-blue-400">Ebne Masud</span>, a passionate and dynamic web developer specializing in modern, interactive, and scalable digital solutions. I bring creativity, precision, and a strong work ethic to every project I tackle.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-300 leading-relaxed font-sans"
          >
            I thrive on solving complex problems and translating ideas into sleek, functional web experiences. My expertise spans React.js, Tailwind CSS, and DevOps strategies, all aimed at delivering top-tier user experiences.
          </motion.p>
        </div>

        {/* Visual Design Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 mt-10 md:mt-0 md:ml-10"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl border border-gray-600 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-bold text-white mb-6 font-sans">What I Do</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 font-sans">
              <li>Building responsive and accessible web interfaces</li>
              <li>Developing scalable backend solutions</li>
              <li>Implementing DevOps strategies for deployment</li>
              <li>Continuous learning and open-source contributions</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;