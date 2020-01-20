const fs = require('promise-fs');

function getAllTodos() {
  return fs.readFile('./data/todos.json', 'utf8').then((data) => JSON.parse(data));
}

module.exports = {
  todoFsResource: {
    getAllTodos,
  },
};
