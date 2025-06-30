const express = require("express");
const router = express.Router();

const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { 
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashboardData,
    getUserDashboardData  } = require("../controllers/taskController");

//Task Management Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); //Get All Tasks (Admin: all, User: assigned)
router.get("/:id", protect, getTaskById); //Get Task By ID
router.post("/", protect, adminOnly, createTask); //Create a Task (Admin only)
router.put("/:id", protect, updateTask); //Update Task details
router.delete("/:id", protect, adminOnly, deleteTask); //Delete a Task (Admin only)
router.put("/:id/status", protect, updateTaskStatus); //Update Task Status
router.put("/:id/todo", protect, updateTaskChecklist); //Update Task Checklist

module.exports=router;