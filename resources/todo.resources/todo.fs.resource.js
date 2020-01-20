const fs = require('promise-fs');
const uuidv1 = require('uuid/v1');

const todosData = './data/todos.json';

async function addTodo(todo) {
  const data = await fs.readFile(todosData, 'utf8');
  const todos = JSON.parse(data);
  // eslint-disable-next-line no-param-reassign
  todo.id = uuidv1();
  todos.push(todo);
  await fs.writeFile(todosData, JSON.stringify(todos));
  return todo;
}

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
    addTodo,
    getAllTodos,
  },
};
