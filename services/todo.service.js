const { todoFsResource } = require('../resources/todo.resources/todo.fs.resource');

const todoResource = todoFsResource;

function getAllTodos(userId, completed) {
  return todoResource.getAllTodos(userId).then((userTodos) => {
    if (completed === true || completed === false) {
      return completed === true
        ? userTodos.filter((todo) => todo.completed === true)
        : userTodos.filter((todo) => todo.completed === false);
    }
    return userTodos;
  });
}

module.exports = {
  todoService: {
    getAllTodos,
  },
};
