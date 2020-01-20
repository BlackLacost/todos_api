const { Router } = require('express');

const { todoController } = require('../controllers/todo.controller');

const router = Router();

// /api/todos/
router.get('/', todoController.getAllTodos);
router.post('/', todoController.addTodo);

module.exports = {
  todoRouter: router,
};
