const MOCK_EMAIL = {
  to: 'dbpbmpchn96+19006@gmail.com', // Replace with your email address
  subject: 'Hello from React Native app on 19006!',
  text: 'This is a test email from the React Native app.',
  html: '<p>This is a <b>test</b> email from the React Native app.</p>',
};

const BASE_API_URL = 'http://localhost:3001';

const endpoints = {
  EMAIL_SEND: 'api/email/send',
};

export default {
  MOCK_EMAIL,
  BASE_API_URL,
  endpoints,
};
