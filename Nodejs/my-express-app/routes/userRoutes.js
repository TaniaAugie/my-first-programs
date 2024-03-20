const express = require("express");

const router = express.Router();

// Import controller functions
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Define routes
router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
