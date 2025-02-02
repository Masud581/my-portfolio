import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Dummy project data with image placeholders
const projects = [
  {
    title: "ZipMart",
    description: "A modern web application built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/400x200?text=Project+1",
    link: "#"
  },
  {
    title: "Project 2",
    description: "An e-commerce platform focusing on user experience.",
    image: "https://via.placeholder.com/400x200?text=Project+2",
    link: "#"
  },
  {
    title: "Project 3",
    description: "A portfolio website showcasing my skills and projects.",
    image: "https://via.placeholder.com/400x200?text=Project+3",
    link: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 flex items-center">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 font-sans border-b-2 border-gray-700 pb-4"
        >
          Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
            >
              {/* Image Section with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden border-b border-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sans">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 font-sans">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  aria-label={`View ${project.title}`}
                  className="inline-flex items-center text-blue-600 font-bold hover:underline font-sans border border-blue-600 rounded-full px-4 py-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  View Project <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;