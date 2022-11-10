import express from "express";
const router = express.Router();
import {getAllUsers, getUserById, updateUser, deleteUser, login, signupUser, getProfile, tokenIsValid } from '../controllers/usersController.js';
import { userAuth } from '../middleware/userAuth.js'

router.get('/', userAuth, getAllUsers);
// router.get('/:id', getUserById);
router.get('/profile', userAuth, getProfile)
router.post('/login', login);
router.post('/', signupUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/tokenIsValid', tokenIsValid);

export default router;