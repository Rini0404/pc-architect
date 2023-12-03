const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // get token fri=om header
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // get user from db
      const user = await User.findById(decoded.id).select('-password');
      
      if(!user) {
        res.status(404)
        throw new Error('User not found')
      }

      req.user = user;

      next();
    } catch (err) {
      console.log(err);
      res.status(401)
      throw new Error('Not authenticated')
    }
  }

  if(!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})


module.exports = { protect };