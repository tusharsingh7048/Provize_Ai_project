import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';

function ServicesOverview() {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-white py-6 -mt-28 px-6 rounded-lg shadow-xl mb-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Become Pro in 30 Days</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Tellus nulla lectus faucibus vitae, non sem sollicitudin nunc ipsum volutpat dolor nec
        facilisis pulvinar mus ut egestas ultrices amet, ridiculus senectus at.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Website Development */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div className="bg-yellow-400 text-white rounded-full p-4 mb-4">
            <FaLaptopCode size={30} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Websites Development</h3>
          <p className="text-gray-600">
            Sed pellentesque eget quis amet amet, proin sed sagittis in ligula semper cursus.
          </p>
        </div>
        {/* Apps Development */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div className="bg-yellow-400 text-white rounded-full p-4 mb-4">
            <FaMobileAlt size={30} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Apps Development</h3>
          <p className="text-gray-600">
            Et volutpat at interdum eros et sit augue mattis ut sed elit varius nunc pharetra.
          </p>
        </div>
        {/* JAM-Stack */}
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <div className="bg-yellow-400 text-white rounded-full p-4 mb-4">
            <FaLayerGroup size={30} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">JAM-Stack</h3>
          <p className="text-gray-600">
            In nunc gravida aenean ullamcorper cras facilisi amet sit et dolor lorem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesOverview;
