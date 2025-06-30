const express=require("express");
const router=express.Router();
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { exportTasksReport, exportUsersReport } = require("../controllers/reportController");
router.get("/export/tasks",protect, adminOnly, exportTasksReport); //export all tasks as Excel/PDF
router.get("/export/users",protect, adminOnly, exportUsersReport); //export user-task report

module.exports=router;