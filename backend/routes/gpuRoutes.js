const express = require('express');
const router = express.Router();
const {
  getGpus,
  createGpu,
  updateGpu,
  deleteGpu
} = require('../controllers/gpuController');

router.route('/').get(getGpus).post(createGpu);
router.route('/:id').put(updateGpu).delete(deleteGpu);


module.exports = router;