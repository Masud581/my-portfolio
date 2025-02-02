import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Aliah Univerisy",
    year: "2022 - Present",
    description: "Pursuing advanced studies in AI, Cloud Computing, and Advanced Algorithms."
  },
  {
    degree: "Diploma in Computer Science and Technology",
    institution: "Nalhati Government Polytechnic",
    year: "2019 - 2022",
    description: "Specialized in Full-Stack Web Development, DevOps, and Machine Learning."
  },
  {
    degree: "Higher Secondary Education",
    institution: "West Bengal Board of Madrasah Education",
    year: "2017 - 2019",
    description: "Focused on Mathematics, Physics, and Computer Science."
  },
  {
    degree: "Secondary Education",
    institution: "Dhanghara Karamjee Sr. Madrasah",
    year: "2007 - 2017",
    description: "Completed coursework in Science, English, and Social Studies."
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-12"
        >
          My Education Journey
        </motion.h2>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gradient-to-r from-blue-500 to-purple-600 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-600 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              </div>
              <p className="text-lg text-gray-700 font-semibold mb-2">{edu.institution}</p>
              <span className="text-sm text-gray-500 italic">{edu.year}</span>
              <p className="mt-4 text-gray-600">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
