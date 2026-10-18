import express from "express";

const app = express();

app.listen(5001, () => {
  console.log("server chạy thành công trên cổng 5001...");
});

app.get("/api/tasks", (req, res) => {
  res.send("bạn có 10 việc cần làm");
});

app.post("/api/tasks", (req, res) => {
  res.json("Thêm task mới thành công");
});

app.put("/api/tasks/:id", (req, res) => {
  res.json("Task được update thành công");
});

app.delete("/api/tasks/:id", (req, res) => {
  res.json("Đã xóa task thành công");
});
