const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const initUser = require('../controllers/exerciseController')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, userType, password } = req.body;

  if (!name || !email || !userType || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // check if user exists

  const userExists = await User.findOne({email})
  
  if (userExists) {
    res.status(400);
    throw new Error('Email already in use');
  }

  // hash the password // use bcrypt

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create the user

  const user = await User.create({
    name,
    email,
    userType,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }

})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  //check for user email

  const user = await User.findOne({email});

  // check password

  if (user && bcrypt.compare(password, user.password)) {
    // user.password is hashed
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error('Invalid Credentials');
  }

})

// private route
// auth middleware
const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  res.status(201).json({
    id: _id,
    name,
    email,
    userType
  })
})

// generate token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}