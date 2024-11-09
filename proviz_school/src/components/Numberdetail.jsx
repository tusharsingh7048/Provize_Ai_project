import React, { useEffect, useState } from 'react';
import { FaGithub, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import CountUp from 'react-countup';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    observer.observe(document.querySelector("#stats-section"));

    return () => observer.disconnect();
  }, []);

  return (
    // bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-100
    <div id="stats-section" className=" p-15 mt-28 ">
      
      {/* Top Border */}
      <div className="flex justify-center">
        <div className="w-[85%] border-black border-t-[1px] mx-auto"></div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl flex justify-between mx-auto px-4 md:px-8 p-6 space-x-8">
        
        {/* Numbers Section */}
        <div className="flex justify-start space-x-10 p-8 pb-6">
          <div className="text-center">
            <p className="text-3xl font-semibold">
              {isVisible && <CountUp start={1} end={320} duration={2.5} />}
            </p>
            <p className="text-gray-500">Lessons</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold">
              {isVisible && <CountUp start={1} end={112} duration={2.5} />}
            </p>
            <p className="text-gray-500">Hours of learning</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold">
              {isVisible && <CountUp start={1} end={24} duration={2.5} />}
            </p>
            <p className="text-gray-500">Series</p>
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex flex-col justify-start items-center p-8 space-y-2">
          <p className="text-gray-500">AS FEATURED IN:</p>
          <div className="flex space-x-8 mt-2">
            <FaGithub className="h-8 text-gray-600" />
            <FaGoogle className="h-8 text-gray-600" />
            <FaMicrosoft className="h-8 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="flex justify-center">
        <div className="w-[85%] border-black border-t-[1px] mx-auto"></div>
      </div>

    </div>
  );
};

export default StatsSection;
