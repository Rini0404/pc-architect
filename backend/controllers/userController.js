const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
// const User = require('../models/userModel');
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);


const getAllUsers = asyncHandler(async (req, res, next) => {
  await client.connect();
  const db = client.db('pcDatabase');
  const collection = db.collection('user');
  const users = await collection.find({}).toArray();
  res.status(200).json({
    success: true,
    data: users,
  });
}
);


// @des : register) user
// @route : POST /api/users
// @access : public

  const registerUser = asyncHandler (async (req, res) => {
    await client.connect();
      const db = client.db('pcDatabase');
      const collection = db.collection('user')
    const { name, email, password } = req.body;
      
    if(!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Please enter all fields'
      });
    }
    
      // check if new user exists
      const result = await collection.findOne({ email });
      if (result) {
        return res.status(400).json({
          success: false,
          error: 'User already exists'
        });
      }

      // hash password
      const salt = await bcrypt.genSalt(15);
      const hashedPassword = await bcrypt.hash(password, salt);

      // create new user
      const user = await collection.insertOne({
        name,
        email,
        password: hashedPassword
      });
      if(user) {
      res.status(201).json({
        success: true,
        id: user.insertedId,
        name,
        email,
        token: generateToken(user.insertedId)
      });
    } else {
      res.status(400)
        throw new Error('Error creating user')
    }
  })


// @des : Auth a user
// @route : POST /api/users/login
// @access : public

const loginUser = asyncHandler (async (req, res) => {
  await client.connect();
  const db = client.db('pcDatabase');
  const collection = db.collection('user')
  const { email, password } = req.body;
  // check if user eemail
  const user = await collection.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      success: true,
      id: user.insertedId,
      name: user.name,
      email: user.email,
      token: generateToken(user.insertedId)
    });
  } else {
    res.status(400).json({
      success: false,
      error: 'Invalid credentials'
    });
  }
  })


// @des : get user
// @route : GET /api/users/me
// @access : private
const getMe = asyncHandler (async (req, res) => {
  await client.connect();
  const db = client.db('pcDatabase');
  const collection = db.collection('user')
  const { _id, name, email } = await collection.findOne(req.user.id);
  console.log(_id, name, email);
  res.status(200).json({
    success: true,
    id: _id,
    name,
    email
  });




  // res.json({
  //   message: 'You are logged in'
  // });

})



// @des : generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
}


module.exports = {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
}