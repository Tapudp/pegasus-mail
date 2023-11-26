const EmailService = require('../services/EmailService');
const { createError } = require('../utils/errorHandler');
const logger = require('../utils/logger');

async function sendEmail(req, res, next) {
  try {
    const { to, subject, text, html } = req.body;
    if (!to || !subject) {
      throw createError('To and Subject are required fields.', 400);
    }

    const email = {
      from: process.env.SENDER_ID,
      to: to,
      subject: subject,
      text: text || 'placeholder email text',
      html: html || 'placeholder email html',
    };

    const sentInfo = await EmailService.sendEmail(email);

    res
      .status(200)
      .send({ status: 'success', message: 'Email sent successfully!', data: sentInfo });
  } catch (error) {
    next(error);
  }
}

const EmailController = {
  sendEmail,
};

module.exports = EmailController;
