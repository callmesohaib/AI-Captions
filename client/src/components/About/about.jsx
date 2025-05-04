import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Caption Generator</h1>
          <p className="text-xl text-gray-600">
            Revolutionizing the way you create captions for your content
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2023, Caption Generator began as a simple idea to help content creators
            overcome writer's block and generate engaging captions effortlessly. Today, we've grown
            into a platform serving thousands of users worldwide with AI-powered caption suggestions.
          </p>
          <p className="text-gray-600">
            Our mission is to empower creators, marketers, and social media enthusiasts with tools
            that enhance their digital presence while saving valuable time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Generation</h3>
            <p className="text-gray-600">
              Get multiple caption suggestions in seconds with our powerful AI technology.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
            <p className="text-gray-600">
              Your content and data are always protected with enterprise-grade security.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Always Evolving</h3>
            <p className="text-gray-600">
              We continuously improve our algorithms to deliver better results.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Team</h2>
          <p className="text-gray-600 mb-6">
            We're a diverse group of AI specialists, linguists, and UX designers passionate about
            creating tools that make content creation easier and more effective.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;