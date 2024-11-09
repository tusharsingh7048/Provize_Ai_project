import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logoImage from '../assets/logo.png';

const Navbar = ({ isLoggedIn, isAdmin, onLoginClick, onLogout }) => {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-10 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 text-black shadow-lg w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logoImage} alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links (Desktop View) */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 text-lg font-semibold">
          <Link to="/" className="hover:text-yellow-600">Home</Link>
          <Link to="/about" className="hover:text-yellow-600">Testimonials</Link>
          <Link to="/lessons" className="hover:text-yellow-600">Course highlights</Link>
          <Link to="/contact" className="hover:text-yellow-600">Team profiles</Link>
          {isLoggedIn && isAdmin && (
            <Link to="/admin" className="hover:text-yellow-600">Admin Panel</Link>
          )}
        </div>

        {/* Social Media Icons (Desktop View) */}
        <div className="hidden md:flex space-x-4 mt-2">
          <FaFacebook size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
        </div>

        {/* Login/Logout Button (Desktop View) */}
        <div className="hidden md:block ml-4">
          {isLoggedIn ? (
            <button 
              onClick={onLogout} 
              className="text-white bg-red-500 px-4 py-2 rounded-full">
              Logout
            </button>
          ) : (
            <button 
              onClick={onLoginClick} 
              className="text-white bg-blue-500 px-4 py-2 rounded-full">
              Login / Sign Up
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default, shown when the hamburger is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden bg-yellow-200 p-4 space-y-4">
          <Link to="/" className="block text-lg font-semibold hover:text-yellow-600">Home</Link>
          <Link to="/about" className="block text-lg font-semibold hover:text-yellow-600">Testimonials</Link>
          <Link to="/lessons" className="block text-lg font-semibold hover:text-yellow-600">Course highlights</Link>
          <Link to="/contact" className="block text-lg font-semibold hover:text-yellow-600">Team profiles</Link>
          {isLoggedIn && isAdmin && (
            <Link to="/admin" className="block text-lg font-semibold hover:text-yellow-600">Admin Panel</Link>
          )}
          {/* Mobile Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>

          {/* Mobile Login/Logout Button */}
          <div className="mt-4">
            {isLoggedIn ? (
              <button 
                onClick={onLogout} 
                className="text-white bg-red-500 px-4 py-2 rounded-full w-full">
                Logout
              </button>
            ) : (
              <button 
                onClick={onLoginClick} 
                className="text-white bg-blue-500 px-4 py-2 rounded-full w-full">
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
