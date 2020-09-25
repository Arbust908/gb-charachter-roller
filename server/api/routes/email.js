const express = require('express');
const EmailsController = require('../controllers/EmailController');

const router = express.Router();

router.post('/send', EmailsController.sendContactEmail);

module.exports = router;
