// Assuming you have a User model, for example, with mongoose
const express = require('express');
const User = require('../models/User');  // Path to your User model
const router = express.Router();

// Route to get all users (for admins only)
router.get('/', async (req, res) => {
  try {
    // Here, you should add middleware to verify admin rights before accessing this route
    const users = await User.find();  // Fetch users from the database
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

module.exports = router;
