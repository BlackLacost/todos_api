const { Router } = require('express');

const { todoController } = require('../controllers/todo.controller');

const router = Router();

router.get('/todos', todoController.getAllTodos);

module.exports = router;
