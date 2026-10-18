export const getAllTasks = (req, res) => {
  res.status(200).send("bạn có 20 việc cần làm");
};

export const createTask = (req, res) => {
  res.status(201).json({ message: "Thêm task mới thành công" });
};

export const updateTask = (req, res) => {
  res.status(200).json({ message: "Task được update thành công" });
};

export const deleteTask = (req, res) => {
  res.status(200).json({ message: "Đã xóa task thành công" });
};
