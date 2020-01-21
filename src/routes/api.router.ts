import { Router } from 'express';

import { todoRouter } from './todos';

const router = Router();

router.use('/todos', todoRouter);

export const apiRouter = router;
