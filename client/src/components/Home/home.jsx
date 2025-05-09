import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react"

const Home = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10 animate-fade-in">
          <motion.h1
            key="header"
            initial={{ x: 30, opacity: 0, rotateX: '90deg' }}
            animate={{ x: 0, opacity: 1, rotateX: '0deg' }}
            exit={{ x: -30, opacity: 0, rotateX: '-90deg' }}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}

            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Images <br className="hidden md:block" />
            With <span className="text-blue-600">AI-Powered</span> Captions
          </motion.h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Our advanced BLIP model generates accurate, context-aware descriptions
            for your visuals in seconds. Perfect for content creators, marketers,
            and accessibility needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <NavLink
            to="/upload"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Generate Captions Now →
          </NavLink>
          <a
            href="#how-it-works"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 text-lg font-medium rounded-xl hover:bg-blue-50 transition-all duration-300"
          >
            How It Works
          </a>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  {item === 1 && "No registration required"}
                  {item === 2 && "Supports multiple image formats"}
                  {item === 3 && "Instant results"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;