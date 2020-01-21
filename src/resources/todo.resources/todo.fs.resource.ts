import * as fs from 'promise-fs';
import * as uuidv1 from 'uuid/v1';

import { config } from '../../config';
import { ITodo } from '../../interfaces/itodo';

const todosData = config.FS_DATA_TODOS_PATH;

async function getTodosFromData() {
  const data = await fs.readFile(todosData, 'utf8');
  const todos = JSON.parse(data) as ITodo[];
  return todos;
}

async function addTodo(todo: ITodo): Promise<ITodo> {
  const todos = await getTodosFromData();
  todo.id = uuidv1();
  todos.push(todo);
  await fs.writeFile(todosData, JSON.stringify(todos));
  return todo;
}

async function changeTodo(userId, id, query: object) {
  const todos = await getTodosFromData();
  const todo = todos.find((todoItem) => todoItem.userId === userId && todoItem.id === id);
  Object.keys(query).forEach((field) => {
    todo[field] = query[field];
  });
  await fs.writeFile(todosData, JSON.stringify(todos));
  return todo;
}

async function deleteTodo(userId, id): Promise<ITodo> {
  const todos = await getTodosFromData();
  const todo = todos.find((todoItem) => todoItem.userId === userId && todoItem.id === id);
  const filteredTodos = todos.filter(
    (todoItem) => todoItem.userId !== userId || todoItem.id !== id,
  );
  await fs.writeFile(todosData, JSON.stringify(filteredTodos));
  return todo;
}

async function getAllTodos(userId: string): Promise<ITodo[]> {
  const todos = await getTodosFromData();
  const userTodos = todos.filter((todo) => todo.userId === userId);
  return userTodos;
}

export const todoFsResource = {
  addTodo,
  changeTodo,
  deleteTodo,
  getAllTodos,
};
