const mongoose = require('mongoose');
const { logger } = require('./common/logger');
const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');
const app = require('./app');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', () => logger.error('conection to DB error!'));
db.once('open', () => logger.info('connected to DB!'));

app.listen(PORT, () =>
  logger.info(`App is running on http://localhost:${PORT}`)
);
