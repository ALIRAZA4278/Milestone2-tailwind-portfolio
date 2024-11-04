// components/ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <form 
        action="https://api.web3forms.com/submit" 
        method="POST" 
        className="w-full max-w-3xl mx-auto p-10 bg-gray-900 rounded-3xl shadow-2xl border border-gray-700"
      >
        <input type="hidden" name="access_key" value="b60b9c26-8567-4e57-baa2-98262de4f80d" />

        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>

        <div className="mb-6">
          <label htmlFor="name" className="block text-xl font-semibold text-white mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            className="w-full p-4 text-black bg-gray-800 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition duration-300 ease-in-out" 
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-xl font-semibold text-white mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            className="w-full p-4 text-black bg-gray-800 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition duration-300 ease-in-out" 
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-xl font-semibold text-white mb-2">Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            id="phone" 
            required 
            className="w-full p-4 text-black bg-gray-800 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition duration-300 ease-in-out" 
          />
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-xl font-semibold text-white mb-2">Subject</label>
          <input 
            type="text" 
            name="subject" 
            id="subject" 
            required 
            className="w-full p-4 text-black bg-gray-800 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition duration-300 ease-in-out" 
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-xl font-semibold text-white mb-2">Message</label>
          <textarea 
            name="message" 
            id="message" 
            rows={5} 
            required 
            className="w-full p-4 text-black bg-gray-800 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white transition duration-300 ease-in-out"
          ></textarea>
        </div>

        <div className="text-center">
          <button 
            type="submit" 
            className="bg-blue-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
