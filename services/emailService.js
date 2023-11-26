// this can be used when using AWS-SES

// import aws from 'aws-sdk';
// import nodemailer from 'nodemailer';
// import sesConfig from '../config/ses.config';

const nodemailer = require('nodemailer');
const logger = require('../utils/logger');
const dotenv = require('dotenv');

// allows access to values from .env file
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SENDER_ID,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

async function sendEmail(email) {
  try {
    const info = await transporter.sendMail(email);
    return info;
  } catch (error) {
    throw error;
  }
}

const EmailService = {
  sendEmail,
};

module.exports = EmailService;
