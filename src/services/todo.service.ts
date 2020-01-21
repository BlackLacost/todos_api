import * as LIVR from 'livr';
import * as extraRules from 'livr-extra-rules';

import { todoFsResource } from '../resources/todo.resources/todo.fs.resource';

const todoResource = todoFsResource;
LIVR.Validator.registerDefaultRules(extraRules);

async function addTodo(data): Promise<object> {
  const validator = new LIVR.Validator({
    completed: ['required', 'boolean'],
    title: ['required', 'string'],
    userId: ['required', 'string'],
  });
  const validData = validator.validate(data);
  if (validData) {
    const addedTodo = await todoResource.addTodo(validData);
    return { todo: addedTodo };
  }
  throw validator.getErrors();
}

async function changeTodo(data): Promise<object> {
  const validator = new LIVR.Validator({
    id: ['required', 'string'],
    query: {
      nested_object: {
        completed: ['boolean', 'required'],
        title: ['required', 'string'],
      },
    },
    userId: ['required', 'string'],
  });
  const validData = validator.validate(data);
  if (validData) {
    const { userId, id, query } = validData;
    const changedTodo = await todoResource.changeTodo(userId, id, query);
    return { todo: changedTodo };
  }
  throw validator.getErrors();
}

async function deleteTodo(data): Promise<object> {
  const validator = new LIVR.Validator({
    id: ['required', 'string'],
    userId: ['required', 'string'],
  });
  const validData = validator.validate(data);
  if (validData) {
    const { id, userId } = data;
    return { todo: await todoResource.deleteTodo(userId, id) };
  }
  throw validator.getErrors();
}

async function getAllTodos(data): Promise<object> {
  const validator = new LIVR.Validator({
    completed: { one_of: [true, false, undefined] },
    userId: ['required', 'string'],
  });
  const validData = validator.validate(data);
  if (validData) {
    const { completed, userId } = validData;
    const userTodos = await todoResource.getAllTodos(userId);
    if (completed === undefined) {
      return { todos: userTodos };
    }
    return completed === true
      ? { todos: userTodos.filter((todo) => todo.completed) }
      : { todos: userTodos.filter((todo) => !todo.completed) };
  }
  throw validator.getErrors();
}

export const todoService = {
  addTodo,
  changeTodo,
  deleteTodo,
  getAllTodos,
};
