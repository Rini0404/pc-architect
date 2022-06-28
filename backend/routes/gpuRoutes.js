const express = require('express');
const router = express.Router();
const {
  getGpus,
  createGpu,
  updateGpu,
  deleteGpu,
  getGpusById,
} = require('../controllers/gpuController');

const { protect } = require('../middleware/authMiddleware.js');

// user has to be loggen in
router.route('/gpus').get(protect, getGpus).post(protect, createGpu);
router.route('/:id').put(protect, updateGpu).delete(protect, deleteGpu).get(protect, getGpusById);


module.exports = router;