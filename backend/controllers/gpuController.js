const Part = require("../models/PartModels");
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
const asyncHandler = require("express-async-handler");
const { ObjectId } = require("mongodb");
// const User = require('../models/userModel');

// @desc get Gpus
// @route GET /api/gpus
// @access Private
const getGpus = async (req, res) => {
  // use parts models to get all parts
  const page = req.query.p || 0;
  const gpusPerPage = 500;
  await client.connect();
  const db = client.db("pcDatabase");
  const collection = db.collection("gpu");
  const result = await collection
    .find({})
    // allows 5 results perpage
    .skip(page * gpusPerPage)
    .limit(gpusPerPage)
    .toArray((err, result) => {
      if (err) return console.log(err);
      // response sends the results, which are all the gpus
      Part.find({}, (err, parts) => {
        // check this out
        if (err) return console.log(err);
        res.send(result);
      });
    });
};

// @desc get Cpu
// @route GET /api/cpus
// @access Private

const getCpus = async (req, res) => {
  // get cpus from 'cpu collection
  const page = req.query.p || 0;
  const gpusPerPage = 90;
  await client.connect();
  const db = client.db("pcDatabase");
  const collection = db.collection("cpu");
  const result = await collection.find({})
    // allows 5 results perpage
    .skip(page * gpusPerPage)
    .limit(gpusPerPage)
  .toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  }
  );
};

// @desc get Ram
// @route GET /api/rams
// @access Private
const getRams = async (req, res) => {
  // get ram from 'ram collection
  const page = req.query.p || 0;
  const gpusPerPage = 90;
  await client.connect();
  const db = client.db("pcDatabase");
  const collection = db.collection("ram");
  const result = await collection.find({})
    // allows 5 results perpage
    .skip(page * gpusPerPage)
    .limit(gpusPerPage)
  .toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  }
  );
}

// @desc get SSD
// @route GET /api/SSds
// @access Private
const getSsds = async (req, res) => {
  // get ram from 'ram collection
  const page = req.query.p || 0;
  const gpusPerPage = 90;
  await client.connect();
  const db = client.db("pcDatabase");
  const collection = db.collection("ssd");
  const result = await collection.find({})
    // allows 5 results perpage
    .skip(page * gpusPerPage)
    .limit(gpusPerPage)
  .toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  }
  );
}

const getUsb = async (req, res) => {
  const page = req.query.p || 0;
  const gpusPerPage = 90;
  await client.connect();
  const db = client.db("pcDatabase");
  const collection = db.collection("usb");
  const result = await collection.find({})
    // allows 5 results perpage
    .skip(page * gpusPerPage)
    .limit(gpusPerPage)
  .toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  }
  );
}

const getHdd = async (req, res) => {
  const page = req.query.p || 0;
  const gpusPerPage = 90;
  await client.connect();
  const db = client.db("pcDatabase");
  const collection = db.collection("hdd");
  const result = await collection.find({})
    // allows 5 results perpage
    .skip(page * gpusPerPage)
    .limit(gpusPerPage)
  .toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  }
  );
}


// @desc get Gpu by Id
// @route GET /api/gpus/:id
// @access Private

const getGpusById = async (req, res) => {
  try {
    const id = req.params.id;
    await client.connect();
    const db = client.db("pcDatabase");
    const collection = db.collection("gpu");
    // grabs the ID
    const result = await collection.findOne({ _id: ObjectId(id) });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

// @desc create Gpus
// @route POST /api/gpus/
// @access Private
const createGpu = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const part = await Part.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(900).json(part);
});
// @desc update Gpus
// @route PUT /api/gpus/:id
// @access Private
const updateGpu = asyncHandler(async (req, res) => {
  try {
    await client.connect();
    const db = client.db("pcDatabase");
    const collection = db.collection("gpu");
    const result = await collection.updateOne(
      { _id: ObjectId(req.params.id) },
      { $set: req.body }
    );
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});
// @desc delete Gpus
// @route put /api/gpus/:id
// @access Private
const deleteGpu = asyncHandler(async (req, res) => {
  try {
    await client.connect();
    const db = client.db("pcDatabase");
    const collection = db.collection("gpu");
    const result = await collection.deleteOne({ _id: ObjectId(req.params.id) });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  getGpus,
  createGpu,
  updateGpu,
  deleteGpu,
  getGpusById,
  getCpus,
  getRams,
  getSsds,
  getUsb,
  getHdd,
};
