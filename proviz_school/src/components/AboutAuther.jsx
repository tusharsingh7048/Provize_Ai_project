import React from 'react';
import authorImage from '../assets/About.png'; // Replace with your image path

function AboutAuthor() {
  return (
    <div className="flex flex-col md:flex-row mt-28 items-center bg-gradient-to-r from-yellow-50 to-white p-10 mx-auto max-w-7xl rounded-lg shadow-lg">
      {/* Left Portion - Author Image */}
      <img
        src={authorImage}
        alt="Author"
        className="w-1/3 md:w-1/3 h-auto rounded-full mb-6 md:mb-0 md:mr-8 object-cover"
      />
      
      {/* Right Portion - Content */}
      <div className="w-full md:w-2/5">
        <h3 className="text-sm uppercase text-gray-500 font-bold mb-2">About the Author</h3>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Dylan Collin Is a Senior JavaScript Developer Based in New York.
        </h2>
        <p className="text-gray-600 mb-4">
          Sapien hendrerit consequat pulvinar hac porttitor congue ac imperdiet vitae porta sed
          duis tristique arcu eget purus sit id quisque amet ornare et aliquet neque tellus amet.
        </p>
        <p className="text-gray-600">
          Auctor pretium, sit vulputate diam egestas mauris, urna scelerisque dignissim volutpat
          purus velit lacus.
        </p>
        <button className="mt-4 text-blue-600 font-semibold flex items-center hover:underline">
          Read More <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default AboutAuthor;
