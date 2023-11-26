const express = require('express');
const constants = require('./constants');
const emailRoutes = require('./routes/emailRoutes');
const logger = require('./utils/logger');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

// enable JSON request, response
app.use(express.json());

// Enable CORS
app.use(cors());

// dotenv config to start reading from env file
dotenv.config();

app.get('/', function (_, res) {
  try {
    res
      .status(200)
      .send({ status: 'success', message: 'knock knock from the email-sender server' });
  } catch (error) {
    next(error);
  }
});

app.use('/api/email', emailRoutes);

app.listen(constants.BASE_APP_PORT, function () {
  logger.warn(`Server started on port ${constants.BASE_APP_PORT}`);
});
