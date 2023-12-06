const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  savePartForUser,
  removePartForUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe)
router.get("/all", getAllUsers);
router.post("/savePart", protect, savePartForUser)
router.put("/removePart", protect, removePartForUser)

module.exports = router;
