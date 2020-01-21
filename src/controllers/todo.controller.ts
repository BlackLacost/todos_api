import { NextFunction, Request, Response } from 'express';
import { todoService } from '../services/todo.service';

async function addTodo(req: Request, res: Response, next: NextFunction) {
  const todo = req.body;
  todo.userId = String(req.query.user_id) && req.query.user_id;
  try {
    const addedTodo = await todoService.addTodo(todo);
    res.json({ todo: addedTodo });
  } catch (err) {
    return next(err);
  }
}

async function changeTodo(req: Request, res: Response, next: NextFunction) {
  const { title, completed } = req.body;
  const { id } = req.params;
  const userId: string = req.query.user_id && req.query.user_id;
  try {
    const changedTodo = await todoService.changeTodo(userId, id, { title, completed });
    res.json({ todo: changedTodo });
  } catch (err) {
    return next(err);
  }
}

async function deleteTodo(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const userId: string = req.query.user_id && req.query.user_id;
  try {
    const deletedTodo = await todoService.deleteTodo(userId, id);
    res.json({ todo: deletedTodo });
  } catch (err) {
    return next(err);
  }
}

async function getAllTodos(req: Request, res: Response, next: NextFunction) {
  const completed = req.query.completed === undefined ? null : req.query.completed === 'true';
  const userId: string = req.query.user_id && req.query.user_id;
  try {
    const userTodos = await todoService.getAllTodos(userId, completed);
    return res.json({ todos: userTodos });
  } catch (err) {
    return next(err);
  }
}

export const todoController = {
  addTodo,
  changeTodo,
  deleteTodo,
  getAllTodos,
};
