const { todoService } = require('../services/todo.service');

function getAllTodos(req, res, next) {
  return todoService
    .getAllTodos()
    .then((todos) => res.json({ todos }))
    .catch(next);
}

module.exports = {
  todoController: {
    getAllTodos,
  },
};
