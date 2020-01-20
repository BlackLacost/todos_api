const express = require('express');
const path = require('path');
const fs = require('promise-fs');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/todos/', (req, res, next) => {
  fs.readFile('./data/todos.json', 'utf8')
    .then((data) => JSON.parse(data))
    .then((todos) => res.json({ todos }))
    .catch(next);
});

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
