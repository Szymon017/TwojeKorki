import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const getAllUsers = async (req, res) => {
  const match = {};
  if(req.query.firstName){
    match.firstName = req.query.firstName;
  }
  if(req.query.lastName){
    match.lastName = req.query.lastName;
  }
  console.log(match);
  try {
    const users = await User.find(match).populate("friends");
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error
    });
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json({
      status: 'success',
      results: user.length,
      data: {
        user
      }
    })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: error
    });
  }
}

const addUser = async (req, res) => {
  const { email, password, firstName, lastName, sex, rating, telephone, role, lastSeen } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);

  try {
    //checking for duplicated phone or email
    const user = await User.findOne({ email });
    const phoneNumber = await User.findOne({ telephone });

    if (user) {
      return res.status(400).json({ message: 'User email already exists' });
    }
    else if (phoneNumber) {
      return res.status(400).json({ message: "Phone number already exists" })
    }

    const newUser = await User.create({
      email, password: hashed_password, firstName, lastName, sex, rating, telephone, role, lastSeen
    });
    const token = createToken(newUser._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge*1000});
    res.status(200).json({
      status: 'Successfully registered user',
      data: newUser
    });
  } catch (error) {
    res.status(500).json({
      status: 'Failed to register new user',
      message: error.message
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const result = await User.findOneAndDelete({ _id: req.params.id });
    if(!result) throw Error("No user found!");

    res.status(201).json({
      status: 'Successfully deleted user',
      data: null
    });
  } catch (error) {
    res.status(409).json({
      status: 'Failed to delete an user',
      message: error
    });
  }
}

const updateUser = async (req, res) => {
  try {
    const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if(!newUser) throw Error("No user found!");
    res.status(200).json({
      status: 'Succesfully updated an user',
      data: newUser
    })
  } catch (error) {
    res.staus(500).json({
      status: 'Failed to update an user',
      message: error
    });
  }
}
const maxAge = 3*24*60*60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
}

export {
  getAllUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser
}