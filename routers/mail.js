const express = require('express');
const router = express.Router();

const { handleFormSubmission } = require('../middleware/mail');

router.post('/', handleFormSubmission);

module.exports = router;