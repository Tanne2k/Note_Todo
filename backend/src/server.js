import express from "express";
import taskRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.use("/api/tasks", taskRoute);

app.listen(5001, () => {
  console.log("server chạy thành công trên cổng 5001...");
});
