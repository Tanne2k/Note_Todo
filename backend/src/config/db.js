// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://...
//     );
//     console.log("Liên kết csdl thành công!");
//   } catch (error) {
//     console.error("Kết nối csdl thất bại!", error);
//     process.exit(1); // exit with error
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
