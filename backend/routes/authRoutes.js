// // proviz_school_backend/routes/authRoutes.js
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const User = require('../models/User');
// const router = express.Router();



// // Signup route
// router.post('/signup', async (req, res) => {
//   const { email, password,isAdmin } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//       isAdmin: isAdmin || false,
//     });

//     // Save user to database
//     await newUser.save();

//     return res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error during signup:', error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// });



// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Compare the password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Create a payload including user info and admin status
//     const payload = {
//       email: user.email,
//       isAdmin: user.isAdmin,
//     };

    
//     // Optionally, generate a JWT token for security (not shown here)

//     return res.status(200).json({ message: 'Login successful', isAdmin: user.isAdmin });
//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// });



// module.exports = router; // Ensure this line is present




// proviz_school_backend/routes/authRoutes.js



// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();
// require('dotenv').config();

// // Signup route
// router.post('/signup', async (req, res) => {
//   const { email, password, isAdmin } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user instance with admin status if specified
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//       isAdmin,
//     });

//     await newUser.save();
//     return res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// });

// // Login route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Verify the password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Create a JWT token
//     const token = jwt.sign(
//       { userId: user._id, isAdmin: user.isAdmin },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     return res.status(200).json({ token, isAdmin: user.isAdmin });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;




// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();
// require('dotenv').config();

// // Signup route
// router.post('/signup', async (req, res) => {
//   const { email, password, isAdmin = false } = req.body; // Default isAdmin to false

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user instance with admin status if specified
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//       isAdmin,
//     });

//     await newUser.save();
//     return res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// });

// // Login route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Verify the password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     // Create a JWT token
//     const token = jwt.sign(
//       { userId: user._id, isAdmin: user.isAdmin },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     return res.status(200).json({ token, isAdmin: user.isAdmin });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;



const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
require('dotenv').config();

// Signup route
router.post('/signup', async (req, res) => {
  const { email, password, isAdmin = false } = req.body; // Default isAdmin to false

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // If user wants to be admin, check if there's already an admin
    if (isAdmin) {
      const adminCount = await User.countDocuments({ isAdmin: true });
      if (adminCount > 0) {
        return res.status(400).json({ message: 'An admin already exists. Only one admin is allowed.' });
      }
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with admin status if specified
    const newUser = new User({
      email,
      password: hashedPassword,
      isAdmin,
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create a JWT token
    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token, isAdmin: user.isAdmin });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
