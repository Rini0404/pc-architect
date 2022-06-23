const asyncHandler = require('express-async-handler');
// @desc get Gpus
// @route GET /api/gpus
// @access Private
const getGpus =  asyncHandler (async (req, res) => {
  res.status(200).json({ message: 'Get Gpu' });
})

// @desc create Gpus
// @route POST /api/gpus/
// @access Private
const createGpu =  asyncHandler (async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add text Feild');
  }

  res.status(200).json({ message: `createGpu` });
})
// @desc update Gpus
// @route PUT /api/gpus/:id
// @access Private
const updateGpu =  asyncHandler (async (req, res) => {
  res.status(200).json({ message: `update gpu ${req.params.id}` });
})
// @desc delete Gpus
// @route put /api/gpus/:id
// @access Private
const deleteGpu =  asyncHandler (async (req, res) => {
  res.status(200).json({ message: `delete gpu ${req.params.id}` });
})


module.exports = {
  getGpus,
  createGpu,
  updateGpu,
  deleteGpu
}