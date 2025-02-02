import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-2xl border-4 border-gradient-to-r from-blue-500 to-purple-600 space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800">Let's Connect</h3>
            <p className="text-gray-600 text-sm">
              Feel free to reach out to me for collaborations, opportunities, or just a friendly hello!
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 text-purple-600 mr-3" />
                <div>
                  <h4 className="text-md font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600 text-sm">Newtown, Kolkata</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="w-5 h-5 text-purple-600 mr-3" />
                <div>
                  <h4 className="text-md font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 8250823088</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 text-purple-600 mr-3" />
                <div>
                  <h4 className="text-md font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm">ebnemasud74@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-2xl border-4 border-gradient-to-r from-blue-500 to-purple-600 space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800">Send Me a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
