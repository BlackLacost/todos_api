const express = require('express');
const path = require('path');

const { apiRouter } = require('./routes/api.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  const jsonRes =
    req.app.get('env') === 'development'
      ? { error, message: err.message }
      : { message: '500 (Internal Server Error)' };
  res.json(jsonRes);
});

module.exports = app;
