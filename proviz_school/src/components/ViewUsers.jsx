import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        console.log(response.data); // Log the response data to inspect its structure
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err); // Log the error for debugging
        setError(err.response ? err.response.data.message : 'Error fetching users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-yellow-700 mb-8">View Users</h2>
        
        {/* Check if the users array is empty */}
        {users.length === 0 ? (
          <div className="text-center">No users found</div>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-2">Email</th>
                <th className="px-6 py-2">Role</th>
                <th className="px-6 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td className="px-6 py-2">{user.email}</td>
                  <td className="px-6 py-2">{user.isAdmin ? 'Admin' : 'User'}</td>
                  <td className="px-6 py-2">
                    <button className="text-blue-500 hover:text-blue-700">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewUsers;
