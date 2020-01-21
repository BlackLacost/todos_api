import * as fs from 'promise-fs';
import * as uuidv1 from 'uuid/v1';

import { ITodo } from '../../interfaces/itodo';

const todosData = './data/todos.json';

async function addTodo(todo: ITodo): Promise<ITodo> {
  const data = await fs.readFile(todosData, 'utf8');
  const todos = JSON.parse(data) as ITodo[];
  todo.id = uuidv1();
  todos.push(todo);
  await fs.writeFile(todosData, JSON.stringify(todos));
  return todo;
}

async function getAllTodos(userId: string): Promise<ITodo[]> {
  const data = await fs.readFile(todosData, 'utf8');
  const todos = JSON.parse(data) as ITodo[];
  const userTodos = todos.filter((todo) => todo.userId === userId);
  return userTodos;
}

export const todoFsResource = {
  addTodo,
  getAllTodos,
};
