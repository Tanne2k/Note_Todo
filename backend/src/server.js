// import express from "express";
// import taskRoute from "./routes/tasksRouters.js";
// import { connectDB } from "./config/db.js";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();
// connectDB();
// app.use(express.json());
// app.use("/api/tasks", taskRoute);
// app.listen(5001, () => {
//   console.log("server chạy thành công trên cổng 5001...");
// });

import "dotenv/config";
import express from "express";
import dns from "node:dns";
import taskRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5001;

// Sử dụng DNS Google để truy vấn MongoDB Atlas
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Đọc dữ liệu JSON từ request
app.use(express.json());

// Khai báo API
app.use("/api/tasks", taskRoute);

// Chỉ chạy server sau khi kết nối database thành công
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server chạy thành công trên cổng ${PORT}...`);
    });
  } catch (error) {
    console.error("Không thể khởi động server:", error.message);
    process.exit(1);
  }
};

startServer();
