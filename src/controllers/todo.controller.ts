import { NextFunction, Request, Response } from 'express';
import { todoService } from '../services/todo.service';

async function addTodo(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await todoService.addTodo({ userId: req.query.user_id, ...req.body }));
  } catch (err) {
    return next(err);
  }
}

async function changeTodo(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(
      await todoService.changeTodo({
        id: req.params.id,
        query: { completed: req.body.completed, title: req.body.title },
        userId: req.query.user_id,
      }),
    );
  } catch (err) {
    return next(err);
  }
}

async function deleteTodo(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await todoService.deleteTodo({ userId: req.query.user_id, id: req.params.id }));
  } catch (err) {
    return next(err);
  }
}

async function getAllTodos(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(
      await todoService.getAllTodos({ completed: req.query.completed, userId: req.query.user_id }),
    );
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
