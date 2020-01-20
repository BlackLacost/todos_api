const { todoFsResource } = require('../resources/todo.resources/todo.fs.resource');

const todoResource = todoFsResource;

function getAllTodos() {
  return todoResource.getAllTodos().then((todos) => {
    return todos;
  });
}

module.exports = {
  todoService: {
    getAllTodos,
  },
};
