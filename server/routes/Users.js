import express from "express";
const router = express.Router();
import {getAllUsers, getUserById, addUser, deleteAllUsers, deleteOneUser} from '../controllers/usersController.js';

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', addUser);
router.delete('/', deleteAllUsers);
router.delete('/', deleteOneUser);

export default router;