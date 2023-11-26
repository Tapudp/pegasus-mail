const express = require('express');
const BaseController = require('../controllers/baseController');

const router = express.Router();

router.get('/', BaseController.handleRoute);

module.exports = router;
