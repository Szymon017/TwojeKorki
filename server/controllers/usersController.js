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
  if (req.query.firstName) {
    match.firstName = req.query.firstName;
  }
  if (req.query.lastName) {
    match.lastName = req.query.lastName;
  }
  if (req.query.email) {
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
    const date = new Date();
    await User.findByIdAndUpdate(user._id, {lastSeen: date});
    const userToken = {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      rating: user.rating,
      numReviews: user.numReviews,
      description: user.description,
      telephone: user.telephone,
      lastSeen: date,
      favourites: user.favourites,
      friends: user.friends,
      role: user.role,
      status: user.status

    }
    const token = createToken(userToken);
    res.status(200).json({
      status: "Logged in",
      token: token,
      message: user
    });
  } catch (err) {
    res.status(400).json({
      status: "Błąd poczas logowania",
      message: err.message
    });
  }
}

const signupUser = async (req, res) => {
  const { email, password, firstName, lastName, sex, rating, numReviews, description, telephone, lastSeen } = req.body;

  try {
    const user = await User.signup(email, password, firstName, lastName, sex, rating, numReviews, description, telephone)

    const token = createToken(user._id);
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
    if (!result) throw Error("No user found!");

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

    console.log(req.body);
    const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    console.log(newUser);
    if (!newUser) {
      throw Error("No user found!")
    } else {
      //token update
      const userToken = {
        _id: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        rating: newUser.rating,
        numReviews: newUser.numReviews,
        description: newUser.description,
        telephone: newUser.telephone,
        lastSeen: newUser.lastSeen,
        favourites: newUser.favourites,
        friends: newUser.friends,
        role: newUser.role,
        status: newUser.status

      }
      const token = createToken(userToken);
      //
      res.status(200).json({
        status: 'Succesfully updated an user',
        data: newUser,
        token: token
      })
    }
  } catch (error) {
    res.status(500).json({
      status: 'Failed to update an user',
      message: error.message
    });
  }
}


const getBannedUsers = async(req, res) => {
  try{
    const result = await User.find({"status.isBanned": true});
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: {
        result
      }
    });
  }catch(error){
    res.status(500).json({
      status: 'Failed to get users',
      message: error.message
    });
  }
}
export {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  signupUser,
  login,
  getBannedUsers
}