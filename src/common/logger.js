const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  transports: [
    new transports.File({
      level: 'http',
      filename: './src/logs/http.log'
    }),
    new transports.File({
      level: 'error',
      filename: './src/logs/error.log'
    }),
    new transports.Console({
      level: 'info',
      format: format.combine(format.colorize(), format.simple())
    })
  ]
});

const logRequest = (req, res, next) => {
  const { method, url, body } = req;
  logger.http(`${method} ${url} body: ${JSON.stringify(body)}`);
  next();
};

module.exports = {
  logger,
  logRequest
};
