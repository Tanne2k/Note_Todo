import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nhattan9a7_db_user:oehIk30PlRILJME4@cluster0.mag1pft.mongodb.net/",
    );
    console.log("Liên kết csdl thành công!");
  } catch (error) {
    console.error("Kết nối csdl thất bại!");
  }
};
