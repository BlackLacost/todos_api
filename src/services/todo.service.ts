import { ITodo } from '../interfaces/itodo';
import { todoFsResource } from '../resources/todo.resources/todo.fs.resource';

const todoResource = todoFsResource;

async function addTodo(todo: ITodo): Promise<ITodo> {
  const addedTodo = await todoResource.addTodo(todo);
  return addedTodo;
}

async function getAllTodos(userId: string, completed: null | boolean): Promise<ITodo[]> {
  const userTodos = await todoResource.getAllTodos(userId);
  if (completed === null) {
    return userTodos;
  }
  return completed === true
    ? userTodos.filter((todo) => todo.completed)
    : userTodos.filter((todo) => !todo.completed);
}

export const todoService = {
  addTodo,
  getAllTodos,
};
