import React from 'react';

const testimonials = [
  {
    name: 'Lisa Hallway',
    role: 'VP of Products',
    feedback: 'Eget blandit faucibus amet feugiat ante semper mattis quam ornare senectus scelerisque.',
    image: '../assets/student1.jpg', // Replace with your image path
  },
  {
    name: 'Luis Alberto',
    role: 'App Developer',
    feedback: 'Proin hac integer pellentesque diam ac nibh potenti euismod turpis fermentum.',
    image: '../assets/student2.jpg',
  },
  {
    name: 'James Carter',
    role: 'Front-end Developer',
    feedback: 'Fringilla neque tristique feugiat nibh mauris, eget tincidunt senectus ut feugiat nec!',
    image: '../assets/student3.jpg',
  },
];

function StudentTestimonials() {
  return (
    <div className="bg-gradient-to-r mt-24 from-yellow-50 via-yellow-100 to-white p-14 rounded-lg shadow-xl max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Student Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.feedback}"</p>
            <div className="flex items-center justify-center space-x-4 mt-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover shadow-lg border-4 border-yellow-400"
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentTestimonials;
