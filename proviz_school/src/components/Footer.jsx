import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-gray-200">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-gray-200">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-gray-200">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-gray-200">Press</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-gray-200">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-gray-200">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-gray-200">Refund Policy</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-gray-400 hover:text-gray-200">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul>
              <li className="mb-2">
                <p className="text-gray-400">Email: support@company.com</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-400">Phone: +1 (234) 567-890</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-400">Address: 1234 Street, City, Country</p>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-400 hover:text-gray-200">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="/" className="text-gray-400 hover:text-gray-200">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="/" className="text-gray-400 hover:text-gray-200">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="/" className="text-gray-400 hover:text-gray-200">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
