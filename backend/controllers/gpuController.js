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
  console.log("getGpus");
};

// @desc get Cpu
// @route GET /api/cpus
// @access Private

const getCpus = async (req, res) => {
console.log("getCpus");
};

// @desc get Ram
// @route GET /api/rams
// @access Private
const getRams = async (req, res) => {
console.log("getRams");
}

// @desc get SSD
// @route GET /api/SSds
// @access Private
const getSsds = async (req, res) => {
  // get ram from 'ram collection
 console.log("getSsds");
}

const getUsb = async (req, res) => {
console.log("getUsb");
}

const getHdd = async (req, res) => {
console.log("getHdd");
}


// @desc get Gpu by Id
// @route GET /api/gpus/:id
// @access Private

const getGpusById = async (req, res) => {
console.log("getGpusById");
};

// @desc create Gpus
// @route POST /api/gpus/
// @access Private
const createGpu = asyncHandler(async (req, res) => {
  console.log("createGpu");
});

// @desc update Gpus
// @route PUT /api/gpus/:id
// @access Private
const updateGpu = asyncHandler(async (req, res) => {
  try {
   console.log("updateGpu");
  } catch (err) {
    console.log(err);
  }
});
// @desc delete Gpus
// @route put /api/gpus/:id
// @access Private
const deleteGpu = asyncHandler(async (req, res) => {
  console.log("deleteGpu");
});


/**
 * @desc get by part type, and by keyword
 * @route GET /api/gpus/:type
 * @access Private
 */

const models = {
  cpu: Part.Cpu,
  gpu: Part.Gpu,
  hdd: Part.Hdd,
  ram: Part.Ram,
  ssd: Part.Ssd,
  usb: Part.Usb
};



const getPartByTypeAndKey = asyncHandler(async (req, res) => {
  try {
    const { type, keyword } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Use type directly as a key
    const PartModel = models[type.toLowerCase()];
    if (!PartModel) {
      return res.status(400).json({ error: 'Invalid part type specified.' });
    }

    let query = {};
    if (keyword !== 'GET_ALL') {
      const regex = new RegExp(keyword, 'i');
      query = { Model: regex };
    }

    const result = await paginate(PartModel, query, page, limit);

    res.json({
      success: true,
      parts: result.data,
      ...result
    });

  } catch (err) {
    console.error('Error fetching parts:', err);
    res.status(500).json({ error: 'An error occurred while fetching parts.' });
  }
});


async function paginate(model, query, page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const data = await model.find(query).skip(skip).limit(limit);
  const total = await model.countDocuments(query);

  return {
    data,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalItems: total
  };
}



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
  getPartByTypeAndKey,
};
