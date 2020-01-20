const { Router } = require('express');
const fs = require('promise-fs');

const router = Router();

router.get('/todos', (req, res, next) => {
  fs.readFile('./data/todos.json', 'utf8')
    .then((data) => JSON.parse(data))
    .then((todos) => res.json({ todos }))
    .catch(next);
});

module.exports = router;
