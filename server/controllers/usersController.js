import mongoose from 'mongoose';
import User from '../models/User.js';
const getAllUsers = (req, res) => {
    res.status(200).json({message: "Get all users"});
}

const getUserById = (req, res) => {
    res.status(200).json({message: "Get user by id"});
}

const addUser = async(req, res) => {
    try {
        const{email, password, firstName, lastName, sex, rating, telephone, role, lastSeen} = req.body;
        const newUser = new User({email, password, firstName, lastName, sex, rating, telephone, role, lastSeen});
        
        await newUser.save();
        res.status(200).send("Successfull");
    } catch (error) {
        console.log(error.message);
    }
}

const deleteAllUsers = (req, res) => {
    res.status(200).json({message: "Deleted all users"});
}

const deleteOneUser = (req, res) => {
    res.status(200).json({message: "Deleted one user"})
}
export {
    getAllUsers,
    getUserById,
    addUser,
    deleteAllUsers,
    deleteOneUser
}