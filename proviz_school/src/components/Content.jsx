


import React, { useState } from "react";
import ApplyForm from "./ApplyForm"; // Import the ApplyForm component
import mainImage from "../assets/AI.avif"; // Main content image
import backgroundImage from "../assets/background.jpg"; // Make sure the background image path is correct

function Content() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal open/close state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div 
      className="p-32 min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
    >
      <div className="max-w-7xl bg-white bg-opacity-80 rounded-xl shadow-xl p-10 md:p-20 mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        
        {/* Left Side - Introduction Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Proviz School of AI
          </h1>
          <p className="text-lg text-gray-800 bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 border-l-4 border-yellow-400 leading-relaxed">
            Proviz School of AI is dedicated to empowering individuals with accessible, high-quality education in artificial intelligence. Our mission is to nurture the next generation of AI experts by providing hands-on learning and expert mentorship. We envision a future where everyone has the tools to innovate with AI and contribute to a better, tech-driven world.
          </p>
          
          {/* Apply Here Button */}
          <button 
            onClick={toggleModal} 
            className="inline-block mt-4 px-8 py-3 text-lg font-semibold text-yellow-700 bg-yellow-300 rounded-full shadow-lg transform transition-transform hover:scale-105 hover:bg-yellow-400 focus:ring focus:ring-yellow-400 focus:outline-none"
          >
            Apply Here →
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={mainImage} 
            alt="Main visual" 
            className="rounded-lg shadow-lg max-w-full h-auto" 
          />
        </div>
      </div>

      {/* Render the ApplyForm Modal */}
      <ApplyForm isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default Content;
