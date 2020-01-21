import { Router } from 'express';

import { todoController } from '../controllers/todo.controller';

const router = Router();

// /api/todos/
router.get('/', todoController.getAllTodos);
router.post('/', todoController.addTodo);

export const todoRouter = router;
