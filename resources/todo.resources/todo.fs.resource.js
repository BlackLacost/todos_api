const fs = require('promise-fs');

function getAllTodos(userId) {
  return fs
    .readFile('./data/todos.json', 'utf8')
    .then((data) => JSON.parse(data))
    .then((todos) => {
      return todos.filter((todo) => todo.userId === userId);
    });
}

module.exports = {
  todoFsResource: {
    getAllTodos,
  },
};
