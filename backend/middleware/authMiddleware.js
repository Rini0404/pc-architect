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
      await client.connect();
      const db = client.db('pcDatabase');
      const collection = db.collection('user')
      req.user = await collection.findOne(decoded.id);
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