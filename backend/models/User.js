const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true, // Adding index for faster email lookups
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true }); // Adding timestamps for createdAt and updatedAt

const User = mongoose.model('User', userSchema);

module.exports = User;









// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   isAdmin: {
//     type: Boolean,
//     default: false, 
//   },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
