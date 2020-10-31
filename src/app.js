const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');
const { logger, logRequest } = require('./common/logger');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const loginRouter = require('./resources/login/login.router');
const { checkAuthorization } = require('./resources/login/login.service');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

process.on('uncaughtException', err => {
  logger.error(`captured error: ${err.message} ${err.stack}`);
});

process.on('unhandledRejection', reason => {
  logger.error(
    `Unhandled rejection detected: ${reason.message} ${reason.stack}`
  );
});

app.use(express.json());
app.use(logRequest);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/login', loginRouter);
app.use('/users', checkAuthorization, userRouter);
app.use('/boards', checkAuthorization, [boardRouter, taskRouter]);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(INTERNAL_SERVER_ERROR).send(getStatusText(INTERNAL_SERVER_ERROR));
  next(err);
});

module.exports = app;
