import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["active", "complete"],
      default: "active",
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timeStamps: true, // createdAt vaf updatedAt tự động thêm vào
  },
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
