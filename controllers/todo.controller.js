const { todoService } = require('../services/todo.service');

function addTodo(req, res, next) {
  const todo = req.body;
  todo.userId = String(req.query.user_id) && req.query.user_id;
  return todoService
    .addTodo(todo)
    .then((addedTodo) => res.json({ todo: addedTodo }))
    .catch(next);
}

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
    addTodo,
    getAllTodos,
  },
};
