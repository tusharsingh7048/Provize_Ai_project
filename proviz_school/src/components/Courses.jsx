import React from "react";
import introImage from "../assets/2.jpg"; // Replace with actual paths to your images
import basicsImage from "../assets/3.jpg";
import dataImage from "../assets/1.jpg";
import testingImage from "../assets/4.jpg";
import validatingImage from "../assets/5.jpg";
import aiTestingImage from "../assets/6.jpg";

const courses = [
  { title: "Introduction", image: introImage, description: "A foundational course to understand the basics of AI." },
  { title: "The Basics", image: basicsImage, description: "Learn the core concepts and structures of AI systems." },
  { title: "Working with Data", image: dataImage, description: "Understand how to handle, process, and visualize data." },
  { title: "Testing", image: testingImage, description: "Learn testing methodologies for AI models and data." },
  { title: "Validating", image: validatingImage, description: "Techniques to validate and improve AI model accuracy." },
  { title: "AI Testing", image: aiTestingImage, description: "Advanced testing strategies specific to AI applications." },
];

function Courses() {
  return (
    <div className="p-10 min-h-screen mt-28">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
        What You Will Learn
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
            <div className="p-4 bg-gray-100 text-right">
              <button className="bg-yellow-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
