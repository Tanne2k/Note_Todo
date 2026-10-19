// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://nhattan9a7_db_user:oehIk30PlRILJME4@cluster0.mag1pft.mongodb.net/dev",
//     );
//     console.log("Liên kết csdl thành công!");
//   } catch (error) {
//     console.error("Kết nối csdl thất bại!", error);
//     process.exit(1);
//   }
// };

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Liên kết CSDL thành công!");
  } catch (error) {
    console.error("Kết nối CSDL thất bại!", error.message);
    throw error;
  }
};
