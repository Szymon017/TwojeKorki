import express from "express";
const router = express.Router();
import {getAllUsers, getUserById, updateUser, deleteUser, login, signupUser, getBannedUsers } from '../controllers/usersController.js';

router.get('/bannedUsers', getBannedUsers)
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/login', login);
router.post('/', signupUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;