const router = require('express').Router();
const { FORBIDDEN, getStatusText } = require('http-status-codes');
const loginService = require('../login/login.service');

router.post('/', async (req, res) => {
  const user = await loginService.checkAuthorizationData(
    req.body.login,
    req.body.password
  );

  if (!user) {
    return res.status(FORBIDDEN).send(getStatusText(FORBIDDEN));
  }

  const token = await loginService.authorizeUser(user.id, user.login);

  res.json({ token });
});

module.exports = router;
