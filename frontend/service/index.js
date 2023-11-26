import constants from '../constants';

const sendEmail = async () => {
  try {
    const response = await fetch(`${constants.BASE_API_URL}/${constants.endpoints.EMAIL_SEND}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(constants.MOCK_EMAIL),
    });

    const result = await response.json();
    if (result.status !== 'success') {
      throw new Error(result);
    }
    alert(`Email has been sent successfully to ${constants.MOCK_EMAIL.to}`);
    return { ...result, emailDetails: { ...constants.MOCK_EMAIL } };
  } catch (error) {
    throw error;
  }
};

export default {
  sendEmail,
};
