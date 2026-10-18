import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controller/tasksController.js";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.get("/:id", updateTask);

router.get("/:id", deleteTask);

export default router;
