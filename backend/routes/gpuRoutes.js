const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/gpuController");

// const { protect } = require("../middleware/authMiddleware.js");

// user has to be loggen in
router.route("/gpus")
.get( getGpus )
.post( createGpu );

router.route("/cpus").get( getCpus );
router.route("/rams").get( getRams );
router.route("/ssds").get( getSsds );
router.route("/usbs").get( getUsb );
router.route("/hdds").get( getHdd );


router
  .route("/:id")
  .put( updateGpu)
  .delete( deleteGpu)
  .get( getGpusById);

router.get('/parts/:type/:keyword', getPartByTypeAndKey);


module.exports = router;
