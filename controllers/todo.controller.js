const fs = require('promise-fs');

function getAllTodos(req, res, next) {
  fs.readFile('./data/todos.json', 'utf8')
    .then((data) => JSON.parse(data))
    .then((todos) => res.json({ todos }))
    .catch(next);
}

module.exports = {
  todoController: {
    getAllTodos,
  },
};
