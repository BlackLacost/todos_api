const { todoService } = require('../services/todo.service');

function getAllTodos(req, res, next) {
  const completed = req.query.completed && req.query.completed === 'true';
  const userId = req.query.user_id && Number(req.query.user_id);
  return todoService
    .getAllTodos(userId, completed)
    .then((userTodos) => res.json({ todos: userTodos }))
    .catch(next);
}

module.exports = {
  todoController: {
    getAllTodos,
  },
};
