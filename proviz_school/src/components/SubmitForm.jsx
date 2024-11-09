// // proviz_school_backend/src/Components/SubmitForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const SubmitForm = () => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [statement, setStatement] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token'); // Assuming JWT token is stored in localStorage
//       if (!token) {
//         setError('You must be logged in to submit the form');
//         return;
//       }

//       const response = await axios.post(
//         'http://localhost:5000/api/submit-form',
//         { name, phone, email, statement },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setSuccess(response.data.message);
//       setName('');
//       setPhone('');
//       setEmail('');
//       setStatement('');
//     } catch (err) {
//       setError(err.response ? err.response.data.message : 'Error submitting the form');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-4xl font-bold text-center text-yellow-700 mb-8">Submit Form</h2>

//         {error && <div className="text-red-500">{error}</div>}
//         {success && <div className="text-green-500">{success}</div>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//           <textarea
//             placeholder="Statement"
//             value={statement}
//             onChange={(e) => setStatement(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//           <button type="submit" className="w-full p-2 bg-yellow-500 text-white rounded">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SubmitForm;
