const express = require("express");
const router = express.Router();
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController");

//User Management Routes
router.get("/", protect, adminOnly, getUsers);  //Get all users (Admin Only)
router.get("/:id", protect, getUserById);       //Get a specific users

module.exports = router;