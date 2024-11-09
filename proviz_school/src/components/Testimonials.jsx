import React, { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "AI Enthusiast",
    image: "https://via.placeholder.com/150", // Replace with actual image path
    text: "Proviz School of AI gave me the knowledge and tools I needed to dive into the world of AI. The curriculum is up-to-date, and the hands-on projects are amazing!",
  },
  {
    name: "Jane Smith",
    role: "Data Scientist",
    image: "https://via.placeholder.com/150", // Replace with actual image path
    text: "The instructors are top-notch, and the learning experience is second to none. I feel well-prepared to take on real-world AI challenges.",
  },
  {
    name: "Mark Johnson",
    role: "AI Engineer",
    image: "https://via.placeholder.com/150", // Replace with actual image path
    text: "The course materials and practical applications helped me gain a strong foundation in AI. I’m now confident working with machine learning models.",
  },
  {
    name: "Emily Brown",
    role: "AI Developer",
    image: "https://via.placeholder.com/150", // Replace with actual image path
    text: "Proviz School of AI's community is incredibly supportive. I’ve learned so much from not just the classes, but also my peers in the program.",
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="p-2 mt-28 min-h-screen ">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16">
        What Our Students Say
      </h2>

      {/* Testimonials Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={prevTestimonial}
            className="p-4 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition-transform transform hover:scale-105"
          >
            &#8592;
          </button>

          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${activeTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-8 py-10 bg-white rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-indigo-600"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-lg text-gray-700">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="p-4 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition-transform transform hover:scale-105"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Mobile Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`w-4 h-4 rounded-full ${
              activeTestimonial === index ? "bg-indigo-600" : "bg-gray-400"
            } transition-colors`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
