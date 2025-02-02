import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-purple-900 to-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">© 2023 Ebne Masud. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/Masud581"
            className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ebne-masud-a84917262/"
            className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="ebnemasud74@gmail.com"
            className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>

        {/* Additional Info */}
        <p className="text-sm text-gray-400">Built with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
