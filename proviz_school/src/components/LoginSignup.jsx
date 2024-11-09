
// import React, { useState } from 'react';

// const LoginSignup = ({ onLogin, onSignup, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
//   const [errorMessage, setErrorMessage] = useState(null); // Error message for invalid inputs
//   const [successMessage, setSuccessMessage] = useState(false); // Success message for successful login/signup

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage(null); // Clear previous errors
//     try {
//       if (isSignup) {
//         await onSignup(email, password); // Call signup function
//         setSuccessMessage(true);
//         setTimeout(() => setSuccessMessage(false), 3000); // Hide success message after 3 seconds
//       } else {
//         await onLogin(email, password); // Call login function
//       }
//     } catch (error) {
//       setErrorMessage('Invalid credentials! Please try again.');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 mx-4 relative border-2 border-transparent transition-transform transform hover:scale-105 hover:border-yellow-400"
//         style={{ boxShadow: '0 0 20px rgba(255, 223, 0, 0.6)' }}>
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-xl">
//           &times;
//         </button>

//         <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">{isSignup ? 'Sign Up' : 'Login'}</h2>

//         {/* Success Message */}
//         {successMessage && (
//           <div className="mb-4 p-2 text-green-800 bg-green-200 border border-green-400 rounded-lg text-center">
//             {isSignup ? 'Signup successful!' : 'Login successful!'}
//           </div>
//         )}

//         {/* Error Message */}
//         {errorMessage && (
//           <div className="mb-4 p-2 text-red-800 bg-red-200 border border-red-400 rounded-lg text-center">
//             {errorMessage}
//           </div>
//         )}

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-2 rounded-full font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-yellow-600"
//           >
//             {isSignup ? 'Sign Up' : 'Login'}
//           </button>
//         </form>

//         {/* Switch between Login and Sign Up */}
//         <div className="text-center mt-4">
//           <button
//             onClick={() => setIsSignup(!isSignup)}
//             className="text-blue-500">
//             {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;



// import React, { useState } from 'react';

// const LoginSignup = ({ onLogin, onSignup, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
//   const [isAdmin, setIsAdmin] = useState(false); // State to manage admin signup
//   const [errorMessage, setErrorMessage] = useState(null); // Error message for invalid inputs
//   const [successMessage, setSuccessMessage] = useState(false); // Success message for successful login/signup

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage(null); // Clear previous errors
//     try {
//       if (isSignup) {
//         await onSignup(email, password, isAdmin); // Pass isAdmin for signup
//         setSuccessMessage(true);
//         setTimeout(() => setSuccessMessage(false), 3000); // Hide success message after 3 seconds
//       } else {
//         await onLogin(email, password); // Call login function
//       }
//     } catch (error) {
//       setErrorMessage('Invalid credentials! Please try again.');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 mx-4 relative border-2 border-transparent transition-transform transform hover:scale-105 hover:border-yellow-400"
//         style={{ boxShadow: '0 0 20px rgba(255, 223, 0, 0.6)' }}>
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-xl">
//           &times;
//         </button>

//         <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">{isSignup ? 'Sign Up' : 'Login'}</h2>

//         {/* Success Message */}
//         {successMessage && (
//           <div className="mb-4 p-2 text-green-800 bg-green-200 border border-green-400 rounded-lg text-center">
//             {isSignup ? 'Signup successful!' : 'Login successful!'}
//           </div>
//         )}

//         {/* Error Message */}
//         {errorMessage && (
//           <div className="mb-4 p-2 text-red-800 bg-red-200 border border-red-400 rounded-lg text-center">
//             {errorMessage}
//           </div>
//         )}

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
//             />
//           </div>

//           {/* Admin checkbox for signup */}
//           {isSignup && (
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={isAdmin}
//                 onChange={() => setIsAdmin(!isAdmin)}
//                 className="mr-2"
//               />
//               <label className="text-gray-700">Register as Admin</label>
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-2 rounded-full font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-yellow-600"
//           >
//             {isSignup ? 'Sign Up' : 'Login'}
//           </button>
//         </form>

//         {/* Switch between Login and Sign Up */}
//         <div className="text-center mt-4">
//           <button
//             onClick={() => setIsSignup(!isSignup)}
//             className="text-blue-500">
//             {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;






// import React, { useState } from 'react';

// const LoginSignup = ({ onLogin, onSignup, onClose,onAdminView  }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
//   const [isAdmin, setIsAdmin] = useState(false); // State to manage admin signup
//   const [errorMessage, setErrorMessage] = useState(null); // Error message for invalid inputs
//   const [successMessage, setSuccessMessage] = useState(false); // Success message for successful login/signup

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') setEmail(value);
//     else if (name === 'password') setPassword(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage(null); // Clear previous errors
//     try {
//       if (isSignup) {
//         await onSignup(email, password, isAdmin); // Pass isAdmin for signup
//         setSuccessMessage(true);
//         setTimeout(() => setSuccessMessage(false), 3000); // Hide success message after 3 seconds
//       } else {
//         await onLogin(email, password); 
//         // Call login function
//         if (isAdmin) {
//           // If admin is logged in, show user list page
//           onAdminView(); // Trigger the action to view users
//         }
//       }
//     } catch (error) {
//       setErrorMessage('Invalid credentials! Please try again.');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 mx-4 relative border-2 border-transparent transition-transform transform hover:scale-105 hover:border-yellow-400">
//         <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-xl">
//           &times;
//         </button>
//         <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">{isSignup ? 'Sign Up' : 'Login'}</h2>
//         {successMessage && <div className="mb-4 p-2 text-green-800 bg-green-200 border border-green-400 rounded-lg text-center"> {isSignup ? 'Signup successful!' : 'Login successful!'} </div>}
//         {errorMessage && <div className="mb-4 p-2 text-red-800 bg-red-200 border border-red-400 rounded-lg text-center"> {errorMessage} </div>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input type="email" name="email" value={email} onChange={handleChange} required className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"/>
//           </div>
//           <div>
//             <label className="block text-gray-700">Password</label>
//             <input type="password" name="password" value={password} onChange={handleChange} required className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"  autocomplete="current-password"/>
//           </div>
//           {isSignup && (
//             <div className="flex items-center">
//               <input type="checkbox" checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} className="mr-2" />
//               <label className="text-gray-700">Register as Admin</label>
//             </div>
//           )}
//           <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-full font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-yellow-600">
//             {isSignup ? 'Sign Up' : 'Login'}
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <button onClick={() => setIsSignup(!isSignup)} className="text-blue-500">
//             {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginSignup = ({ onLogin, onSignup, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const [adminExists, setAdminExists] = useState(false);  // Track if admin already exists

  useEffect(() => {
    const checkAdminExists = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        const users = response.data;
        const admin = users.find(user => user.isAdmin);
        setAdminExists(!!admin);  // Check if admin exists
      } catch (err) {
        console.error('Error fetching users', err);
      }
    };

    checkAdminExists();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      if (isSignup) {
        await onSignup(email, password, isAdmin); // Pass isAdmin for signup
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 3000);
      } else {
        await onLogin(email, password); // Call login function
      }
    } catch (error) {
      setErrorMessage('Invalid credentials! Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8 mx-4 relative border-2 border-transparent transition-transform transform hover:scale-105 hover:border-yellow-400">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 font-bold text-xl">
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">{isSignup ? 'Sign Up' : 'Login'}</h2>
        {successMessage && <div className="mb-4 p-2 text-green-800 bg-green-200 border border-green-400 rounded-lg text-center"> {isSignup ? 'Signup successful!' : 'Login successful!'} </div>}
        {errorMessage && <div className="mb-4 p-2 text-red-800 bg-red-200 border border-red-400 rounded-lg text-center"> {errorMessage} </div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"/>
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"/>
          </div>
          {isSignup && !adminExists && (
            <div className="flex items-center">
              <input 
                type="checkbox" 
                checked={isAdmin} 
                onChange={() => setIsAdmin(!isAdmin)} 
                className="mr-2" 
                disabled={adminExists}  // Disable checkbox if an admin exists
              />
              <label className="text-gray-700">Register as Admin</label>
            </div>
          )}
          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-full font-semibold shadow-lg transform transition-transform hover:scale-105 hover:bg-yellow-600">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="text-center mt-4">
          <button onClick={() => setIsSignup(!isSignup)} className="text-blue-500">
            {isSignup ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
