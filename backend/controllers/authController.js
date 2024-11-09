// const bcrypt = require('bcryptjs');
// const User = require('../models/User'); // Assuming you have a User model

// // Signup handler
// const signup = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save the new user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword, // Store the hashed password
//     });

//     await newUser.save(); // Save to the database

//     return res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = { signup };




// const bcrypt = require('bcryptjs');
// const User = require('../models/User'); // Assuming you have a User model

// // Signup handler
// const signup = async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Check if the email is for an admin
//     const isAdmin = email === "admin@example.com"; // Hardcode admin email for now

//     // Create and save the new user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//       isAdmin, // Set admin status
//     });

//     await newUser.save(); // Save to the database

//     return res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = { signup };





const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { email, password, isAdmin } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, isAdmin });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, 'your_jwt_secret');
    res.status(200).json({ token, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signup, login };
