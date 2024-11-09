import React, { useState } from 'react';
import axios from 'axios';

const ApplyForm = ({ isOpen, toggleModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    statement: '',
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/submit-form', // Make sure the URL is correct
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true, // if you need to send cookies or credentials
        }
      );
      if (response.status === 201) {
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
          toggleModal();
        }, 3000);

        setFormData({
          name: '',
          phone: '',
          email: '',
          statement: '',
        });
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Failed to submit form. Please try again.');
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 mx-4 relative border-2 border-transparent transition-transform transform hover:scale-105 hover:border-yellow-400" style={{ boxShadow: '0 0 20px rgba(255, 223, 0, 0.6)' }}>
        <button onClick={toggleModal} className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-xl">
          &times;
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Application Form</h2>

        {successMessage && (
          <div className="mb-4 p-2 text-green-800 bg-green-200 border border-green-400 rounded-lg text-center">
            Form successfully submitted!
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 p-2 text-red-800 bg-red-200 border border-red-400 rounded-lg text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Brief Statement</label>
            <textarea
              name="statement"
              value={formData.statement}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md h-24"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-full font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-yellow-600"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
