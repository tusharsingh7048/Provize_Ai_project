const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Define CORS options to handle multiple front-end URLs
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Multiple origins
  methods: ['GET', 'POST'],
  credentials: true,  // Allow credentials (cookies, authorization headers)
};

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(corsOptions));  // Use the updated CORS configuration
app.use(bodyParser.json());

// Routes
app.use('/api', formRoutes);
app.use('/api', authRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
