const express = require("express");
const router = express.Router();
const {
  getGpus,
  createGpu,
  updateGpu,
  deleteGpu,
  getGpusById,
} = require("../controllers/gpuController");

// const { protect } = require("../middleware/authMiddleware.js");

// user has to be loggen in
router.route("/gpus").get( getGpus).post( createGpu);
router
  .route("/:id")
  .put( updateGpu)
  .delete( deleteGpu)
  .get( getGpusById);

module.exports = router;
