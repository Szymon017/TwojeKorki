import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  });
}

const getAllUsers = async (req, res) => {
  const match = {};
  if(req.query.firstName){
    match.firstName = req.query.firstName;
  }
  if(req.query.lastName){
    match.lastName = req.query.lastName;
  }
  if(req.query.email){
    match.email = req.query.email;
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

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ 
      status: "Zalogowano do systemu",
      token: token,
      message: user
     });
  } catch (err) {
    res.status(400).json({
      status: "Błąd podczas logowania",
      message: err.message
    });
  }
}

const signupUser = async (req, res) => {
  const { email, password, firstName, lastName, sex, rating, telephone, role, lastSeen } = req.body;

  try {
    const user = await User.signup(email, password, firstName, lastName, sex, rating, telephone, role)

    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(200).json({
      message: "Account created"
    })
    
  } catch (error) {
    res.status(500).json({
      error: error.message,
      name: error.name
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
    res.status(500).json({
      status: 'Failed to update an user',
      message: error
    });
  }
}

const getProfile = async(req, res) => {
  try{
    const user = await User.findById(req.user.id)
    console.log(user);
    res.json({
      id: user.id,
      name: user.firstName
    })
  }catch(err){
    console.log(err);
  }
}

const tokenIsValid = async(req, res) => {
  try{
    const token = req.header('auth-token');
    if(!token){
      return res.json(false)
    }

    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    if(!verified){
      return res.json(false);
    }

    const user = await User.findById(verified.id);
    if(!user){
      return res.json(false);
    }

    return res.json(true)
  }catch(err){
    res.status(500).json({message: err})
  }
}

export {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  signupUser,
  login,
  getProfile,
  tokenIsValid
}