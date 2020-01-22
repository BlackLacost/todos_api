import { todoService } from '../services/todo.service';
import { makeController } from './utils.controller';

export const todoController = {
  addTodo: makeController(todoService.addTodo, (req) => ({
    userId: req.query.user_id,
    ...req.body,
  })),
  changeTodo: makeController(todoService.changeTodo, (req) => ({
    id: req.params.id,
    query: { completed: req.body.completed, title: req.body.title },
    userId: req.query.user_id,
  })),
  deleteTodo: makeController(todoService.deleteTodo, (req) => ({
    id: req.params.id,
    userId: req.query.user_id,
  })),
  getAllTodos: makeController(todoService.getAllTodos, (req) => ({
    completed: req.query.completed,
    userId: req.query.user_id,
  })),
};
