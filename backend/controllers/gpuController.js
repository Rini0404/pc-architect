const Part = require('../models/PartModels');
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const asyncHandler = require('express-async-handler');
const { ObjectId } = require('mongodb');

// @desc get Gpus
// @route GET /api/gpus
// @access Private
const getGpus = async (req, res) => {
    try {
      // const page = req.query.p || 0;
      // const gpusPerPage = 5;
      await client.connect();
      const db = client.db('pcDatabase');
      const collection = db.collection('gpu')
      // .skip(page * gpusPerPage)
      // .limit(gpusPerPage);
      const result = await collection.find({})
      .toArray((err, result) => {
        if (err) return console.log(err)
        // response sends the results, which are all the gpus
        res.send(result)
      });
    } catch (err) {
      console.log(err);
    }
}

  // @desc get Gpu by Id
  // @route GET /api/gpus/:id
  // @access Private
  
  const getGpusById = async (req, res) => {
    try {
      const id = req.params.id;
      await client.connect();
      const db = client.db('pcDatabase');
      const collection = db.collection('gpu');
      // grabs the ID
      const result = await collection.findOne({ _id: ObjectId(id) });
      res.send(result);
    } catch (err) {
      console.log(err);
    } 
  }


// @desc create Gpus
// @route POST /api/gpus/
// @access Private
const createGpu =  asyncHandler (async (req, res) => {

  try {
    await client.connect();
    const db = client.db('pcDatabase');
    const collection = db.collection('gpu');
    const result = await collection.insertOne(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
})
// @desc update Gpus
// @route PUT /api/gpus/:id
// @access Private
const updateGpu =  asyncHandler (async (req, res) => {
  try {
    await client.connect();
    const db = client.db('pcDatabase');
    const collection = db.collection('gpu');
    const result = await collection.updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
})
// @desc delete Gpus
// @route put /api/gpus/:id
// @access Private
const deleteGpu =  asyncHandler (async (req, res) => {
  try {
    await client.connect();
    const db = client.db('pcDatabase');
    const collection = db.collection('gpu');
    const result = await collection.deleteOne({ _id: ObjectId(req.params.id) });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
})


module.exports = {
  getGpus,
  createGpu,
  updateGpu,
  deleteGpu,
  getGpusById
}