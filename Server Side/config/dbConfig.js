import mongoose from "mongoose";
const connectDB = async () => {
  const ENV = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(ENV, {});
    console.log(`Mongo DB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
export default connectDB;
