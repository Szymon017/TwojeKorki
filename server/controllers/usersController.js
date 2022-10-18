import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const getAllUsers = (req, res) => {
    res.status(200).json({ message: "Get all users" });
}

const getUserById = (req, res) => {
    res.status(200).json({ message: "Get user by id" });
}

const addUser = async (req, res) => {
    const { email, password, firstName, lastName, sex, rating, telephone, role, lastSeen } = req.body;
    try {
      const user = await User.findOne({ email });
      const phoneNumber = await User.findOne({telephone});
      
      //checking for duplicates phone and email
      if (user) {
        return res.status(400).json({ message: 'User email already exists' });
      }
      else if(phoneNumber){
        return res.status(400).json({message: "Phone number already exists"})
      }
  
      const result = await User.create({
        email, password, firstName, lastName, sex, rating, telephone, role, lastSeen
      });
  
      res.status(201).json({ message: 'User created', user: result });
  
    } catch (error) {
      console.log(error);
    }
  }

const deleteAllUsers = (req, res) => {
    res.status(200).json({ message: "Deleted all users" });
}

const deleteOneUser = async(req, res) => {
    const _id = req.params.id;
    try{
      const result = User.findOneAndDelete(_id).exec();
      res.send({message: `User deleted`})
    }catch(error){
      res.send(error)
    }

}
export {
    getAllUsers,
    getUserById,
    addUser,
    deleteAllUsers,
    deleteOneUser
}