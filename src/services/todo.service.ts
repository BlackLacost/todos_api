import * as LIVR from 'livr';
import * as extraRules from 'livr-extra-rules';

import { ITodo } from '../interfaces/itodo';
import { todoFsResource } from '../resources/todo.resources/todo.fs.resource';

const todoResource = todoFsResource;
LIVR.Validator.registerDefaultRules(extraRules);

async function addTodo(todo: ITodo): Promise<ITodo> {
  const addedTodo = await todoResource.addTodo(todo);
  return addedTodo;
}

async function changeTodo(userId: string, id: string, query): Promise<ITodo> {
  const validator = new LIVR.Validator({
    completed: ['boolean', 'required'],
    title: ['required', 'string'],
  });
  const validQuery = validator.validate(query);
  if (validQuery) {
    const changedTodo = await todoResource.changeTodo(userId, id, validQuery);
    return changedTodo;
  }
  throw validator.getErrors();
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
  changeTodo,
  getAllTodos,
};
