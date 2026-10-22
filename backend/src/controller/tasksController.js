import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    // throw new Error("lỗi");
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Lỗi khi gọi getAllTasks", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title });

    const newTask = await task.save();
    return res.status(201).json(newTask);
  } catch (error) {
    console.error("Lỗi khi gọi createTask", error);
    return res.status(500).json({ message: "Lỗi hệ thống" });
  }
};

export const updateTask = (req, res) => {
  res.status(200).json({ message: "Task được update thành công" });
};

export const deleteTask = (req, res) => {
  res.status(200).json({ message: "Đã xóa task thành công" });
};
