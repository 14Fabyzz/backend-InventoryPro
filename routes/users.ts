import express from 'express';
import verifyToken from '../middleware/VerifyToken';
import * as UserController from '../controllers/users-controller';
import exp from 'constants';

const router = express.Router();

router.get('/all', verifyToken, UserController.getAllUsers);
router.get('/:id', verifyToken, UserController.getUserById);

export default router;