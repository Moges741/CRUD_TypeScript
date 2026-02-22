import {getUsers, getUserById, createUser, updateUser, deleteUser} from '../controllers/userControllers';
import express from 'express';

const router = express.Router();

router.get('', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;