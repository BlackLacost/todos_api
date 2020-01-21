import { Router } from 'express';

import { todoController } from '../controllers/todo.controller';

const router = Router();

// /api/todos/
router.get('/', todoController.getAllTodos);
router.post('/', todoController.addTodo);
router.put('/:id', todoController.changeTodo);

export const todoRouter = router;
