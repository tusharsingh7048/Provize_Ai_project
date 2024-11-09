// // proviz_school_backend/controllers/formController.js
// const FormSubmission = require('../models/FormSubmission');

// exports.submitForm = async (req, res) => {
//   try {
//     const { name, phone, email, statement } = req.body;
//     const newSubmission = new FormSubmission({ name, phone, email, statement });
//     await newSubmission.save();
//     res.status(201).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to submit form', error });
//   }
// };



const FormSubmission = require('../models/FormSubmission');

// Controller to handle form submission
exports.submitForm = async (req, res) => {
  try {
    const { name, phone, email, statement } = req.body;
    const newSubmission = new FormSubmission({ name, phone, email, statement });
    await newSubmission.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit form', error });
  }
};

// Controller to get all form submissions
exports.getFormSubmissions = async (req, res) => {
  try {
    const submissions = await FormSubmission.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve form submissions', error });
  }
};
