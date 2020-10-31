const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UNAUTHORIZED, getStatusText } = require('http-status-codes');
const userService = require('../users/user.service');
const { JWT_SECRET_KEY } = require('../../common/config');

const authorizeUser = async (userId, login) => {
  return jwt.sign({ userId, login }, JWT_SECRET_KEY, { expiresIn: '1h' });
};

const checkAuthorizationData = async (login, password) => {
  const user = await userService.getByLogin(login);
  if (user) {
    return (await bcrypt.compare(password, user.password)) && user;
  }
};

const checkAuthorization = async (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer', '').trim();
    await jwt.verify(token, JWT_SECRET_KEY);
  } catch (err) {
    return res.status(UNAUTHORIZED).send(getStatusText(UNAUTHORIZED));
  }

  next();
};

module.exports = {
  authorizeUser,
  checkAuthorizationData,
  checkAuthorization
};
