import { Router } from 'express';

import { todoRouter } from './todos';
import { userRouter } from './users';

const router = Router();

router.use('/users', userRouter);
router.use('/todos', todoRouter);

export const apiRouter = router;
