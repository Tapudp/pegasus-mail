async function handleRoute(_, res) {
  try {
    res
      .status(200)
      .send({ status: 'success', message: 'knock knock from the email-sender server' });
  } catch (error) {
    next(error);
  }
}

const BaseController = {
  handleRoute,
};

module.exports = BaseController;
