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
  getAllTodos,
};
