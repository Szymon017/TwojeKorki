import express from "express";
const router = express.Router();
import {getAllUsers, getUserById, addUser, deleteAllUsers, deleteOneUser} from '../controllers/usersController.js';
import  userValidator  from "../validators/userValidator.js";

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', userValidator, addUser);
router.delete('/', deleteAllUsers);
router.delete('/:id', deleteOneUser);

export default router;