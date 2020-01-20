const { Router } = require('express');
const fs = require('promise-fs');

const router = Router();

router.get('/todos', async (req, res, next) => {
  try {
    const data = await fs.readFile('./data/todos.json', 'utf8');
    const todos = JSON.parse(data);
    return res.json({
      todos,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
