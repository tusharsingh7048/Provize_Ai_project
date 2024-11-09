


// import React, { useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Use Routes and Navigate
// import Navbar from './components/Navbar';
// import Content from './components/Content';
// import Numberdetail from './components/Numberdetail';
// import LoginSignup from './components/LoginSignup';
// import AdminPanel from './components/AdminPanel';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [showLoginSignup, setShowLoginSignup] = useState(false);

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       setIsLoggedIn(true);
//       setIsAdmin(response.data.isAdmin);
//       setShowLoginSignup(false);
//     } catch (error) {
//       alert("Invalid credentials! Please try again.");
//     }
//   };

//   const handleSignup = async (email, password, isAdmin) => {
//     try {
//       await axios.post('http://localhost:5000/api/signup', { email, password, isAdmin });
//       alert("Signup successful! You can now log in.");
//       setShowLoginSignup(false);
//     } catch (error) {
//       alert("Error during signup. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//   };

//   const handleCloseModal = () => {
//     setShowLoginSignup(false);
//   };

//   return (
//     <Router>
//       <div>
//         <Navbar
//           isLoggedIn={isLoggedIn}
//           isAdmin={isAdmin}
//           onLoginClick={() => setShowLoginSignup(true)}
//           onLogout={handleLogout}
//         />

//         <Routes>
//           {/* Main content routes */}
//           <Route path="/" element={<><Content /><Numberdetail /></>} />

//           {/* Admin route, accessible only if logged in as admin */}
//           <Route 
//             path="/admin" 
//             element={isLoggedIn && isAdmin ? <AdminPanel /> : <Navigate to="/" />} 
//           />

//           {/* 404 Not Found for undefined routes */}
//           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//         </Routes>

//         {showLoginSignup && (
//           <LoginSignup
//             onLogin={handleLogin}
//             onSignup={handleSignup}
//             onClose={handleCloseModal}
//           />
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Content from './components/Content';
// import Numberdetail from './components/Numberdetail';
// import LoginSignup from './components/LoginSignup';
// import AdminPanel from './components/AdminPanel';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [showLoginSignup, setShowLoginSignup] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   // Check if user is logged in from localStorage on initial load
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios.get('http://localhost:5000/api/verify', { headers: { Authorization: `Bearer ${token}` } })
//         .then(response => {
//           setIsLoggedIn(true);
//           setIsAdmin(response.data.isAdmin);
//         })
//         .catch(() => {
//           localStorage.removeItem('token');
//         });
//     }
//   }, []);

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       setIsLoggedIn(true);
//       setIsAdmin(response.data.isAdmin);
//       setShowLoginSignup(false);
//     } catch (error) {
//       setErrorMessage("Invalid credentials! Please try again.");
//     }
//   };

//   const handleSignup = async (email, password, isAdmin) => {
//     try {
//       await axios.post('http://localhost:5000/api/signup', { email, password, isAdmin });
//       alert("Signup successful! You can now log in.");
//       setShowLoginSignup(false);
//     } catch (error) {
//       setErrorMessage("Error during signup. Please try again.");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//   };

//   const handleCloseModal = () => {
//     setShowLoginSignup(false);
//     setErrorMessage(''); // Reset error message on modal close
//   };

//   return (
//     <Router>
//       <div>
//         <Navbar
//           isLoggedIn={isLoggedIn}
//           isAdmin={isAdmin}
//           onLoginClick={() => setShowLoginSignup(true)}
//           onLogout={handleLogout}
//         />

//         <Routes>
//           {/* Main content routes */}
//           <Route path="/" element={<><Content /><Numberdetail /></>} />

//           {/* Admin route, accessible only if logged in as admin */}
//           <Route 
//             path="/admin" 
//             element={isLoggedIn && isAdmin ? <AdminPanel /> : <Navigate to="/" />} 
//           />

//           {/* 404 Not Found for undefined routes */}
//           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//         </Routes>

//         {showLoginSignup && (
//           <LoginSignup
//             onLogin={handleLogin}
//             onSignup={handleSignup}
//             onClose={handleCloseModal}
//             errorMessage={errorMessage} // Pass error message to modal
//           />
//         )}
//       </div>
//     </Router>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Numberdetail from './components/Numberdetail';
import LoginSignup from './components/LoginSignup';
import AdminPanel from './components/AdminPanel';
import ViewUsers from './components/ViewUsers';  // Import ViewUsers component
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import AboutAuthor from './components/AboutAuther';
import ServicesOverview from './components/ServiceOverview';
import StudentTestimonials from './components/StudentTestimonials';
import Footer from './components/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Check if user is logged in from localStorage on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:5000/api/verify', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setIsLoggedIn(true);
          setIsAdmin(response.data.isAdmin);
        })
        .catch(() => {
          localStorage.removeItem('token');
        });
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      setIsAdmin(response.data.isAdmin);
      setShowLoginSignup(false);
    } catch (error) {
      setErrorMessage("Invalid credentials! Please try again.");
    }
  };

  const handleSignup = async (email, password, isAdmin) => {
    try {
      await axios.post('http://localhost:5000/api/signup', { email, password, isAdmin });
      alert("Signup successful! You can now log in.");
      setShowLoginSignup(false);
    } catch (error) {
      setErrorMessage("Error during signup. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  const handleCloseModal = () => {
    setShowLoginSignup(false);
    setErrorMessage(''); // Reset error message on modal close
  };

  return (
    <Router>
      <div>
        <Navbar
          isLoggedIn={isLoggedIn}
          isAdmin={isAdmin}
          onLoginClick={() => setShowLoginSignup(true)}
          onLogout={handleLogout}
        />

        <Routes>
          {/* Main content routes */}
          <Route path="/" element={<><Content /><Numberdetail /> <AboutAuthor/> <Courses/>  <Testimonials/> <ServicesOverview/> <StudentTestimonials/> <Footer/> </>} />

          {/* Admin route, accessible only if logged in as admin */}
          <Route 
            path="/admin" 
            element={isLoggedIn && isAdmin ? <AdminPanel /> : <Navigate to="/" />} 
          />

          {/* View Users route, accessible only if logged in as admin */}
          <Route
            path="/admin/view-users"
            element={isLoggedIn && isAdmin ? <ViewUsers /> : <Navigate to="/admin" />}
          />

          {/* 404 Not Found for undefined routes */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>

        {showLoginSignup && (
          <LoginSignup
            onLogin={handleLogin}
            onSignup={handleSignup}
            onClose={handleCloseModal}
            errorMessage={errorMessage} // Pass error message to modal
          />
        )}
      </div>
    </Router>
  );
}

export default App;
