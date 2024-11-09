// // proviz_school_backend/routes/formRoutes.js
// const express = require('express');
// const router = express.Router();
// const { submitForm } = require('../controllers/formController');

// router.post('/submit-form', submitForm);

// module.exports = router;





const express = require('express');
const router = express.Router();
const { submitForm, getFormSubmissions } = require('../controllers/formController');

// Submit form route
router.post('/submit-form', submitForm);

// Get all form submissions (for Admin Panel)
router.get('/form-submissions', getFormSubmissions);

module.exports = router;
