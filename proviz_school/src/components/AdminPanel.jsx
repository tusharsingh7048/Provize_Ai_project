




// import React from 'react';
// import { FaUser, FaBox, FaChartLine, FaCog } from 'react-icons/fa';
// import { Link } from 'react-router-dom';  // Import Link for routing

// const AdminPanel = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-4xl font-bold text-center text-yellow-700 mb-8">Admin Panel</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Manage Users */}
//           <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 rounded-lg shadow-md flex flex-col items-center">
//             <FaUser className="text-yellow-900 text-3xl mb-4" />
//             <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Manage Users</h3>
//             <Link to="/admin/view-users">  {/* Link to ViewUsers component */}
//               <button className="bg-yellow-600 text-white py-2 px-6 rounded-full mb-2 hover:bg-yellow-700 transition">View Users</button>
//             </Link>
//             <button className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 transition">Form Submitted</button>
//           </div>

//           {/* Manage Products */}
//           <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 rounded-lg shadow-md flex flex-col items-center">
//             <FaBox className="text-yellow-900 text-3xl mb-4" />
//             <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Manage Products</h3>
//             <button className="bg-yellow-600 text-white py-2 px-6 rounded-full mb-2 hover:bg-yellow-700 transition">View Products</button>
//             <button className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 transition">Add New Product</button>
//           </div>

//           {/* Analytics */}
//           <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 rounded-lg shadow-md flex flex-col items-center">
//             <FaChartLine className="text-yellow-900 text-3xl mb-4" />
//             <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Analytics</h3>
//             <button className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 transition">View Analytics</button>
//           </div>

//           {/* Settings */}
//           <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 rounded-lg shadow-md flex flex-col items-center">
//             <FaCog className="text-yellow-900 text-3xl mb-4" />
//             <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Settings</h3>
//             <button className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 transition">General Settings</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser, FaBox, FaChartLine, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch form submissions from the backend
  const fetchSubmissions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/form-submissions');
      setSubmissions(response.data);
    } catch (error) {
      console.error('Failed to fetch form submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-8">Admin Panel</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Manage Users */}
          <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaUser className="text-yellow-900 text-3xl mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Manage Users</h3>
            <Link to="/admin/view-users">
              <button className="bg-yellow-600 text-white py-2 px-6 rounded-full mb-2 hover:bg-yellow-700 transition">View Users</button>
            </Link>
            
          </div>

          {/* Manage Form Submissions */}
          <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaBox className="text-yellow-900 text-3xl mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Manage Form Submissions</h3>
            <div className="space-y-4">
              {loading ? (
                <p>Loading...</p>
              ) : (
                submissions.length > 0 ? (
                  submissions.map((submission) => (
                    <div key={submission._id} className="bg-white p-4 rounded-lg shadow-lg">
                      <h4 className="text-xl font-semibold text-yellow-700">{submission.name}</h4>
                      <p className="text-gray-600">{submission.email}</p>
                      <p className="text-gray-600">{submission.phone}</p>
                      <p className="text-gray-600">{submission.statement}</p>
                      <p className="text-gray-400 text-sm">Submitted At: {new Date(submission.submittedAt).toLocaleString()}</p>
                    </div>
                  ))
                ) : (
                  <p>No form submissions yet.</p>
                )
              )}
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaChartLine className="text-yellow-900 text-3xl mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Analytics</h3>
            <button className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 transition">View Analytics</button>
          </div>

          {/* Settings */}
          <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaCog className="text-yellow-900 text-3xl mb-4" />
            <h3 className="text-2xl font-semibold text-yellow-900 mb-4">Settings</h3>
            <button className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 transition">General Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
