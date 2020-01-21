import { Router } from 'express';

import { userController } from '../controllers/user.controller';

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/:id/info', userController.getUserInfo);

export const userRouter = router;
