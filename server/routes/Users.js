import express from "express";
const router = express.Router();
import {getAllUsers, getUserById, addUser, updateUser, deleteUser, login } from '../controllers/usersController.js';
import  userValidator  from "../middleware/validation/userValidator.js";

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', userValidator, addUser);
router.post('/login', login);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;