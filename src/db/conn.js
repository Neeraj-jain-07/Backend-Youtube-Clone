import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log("Mongodb connected ", connectionInstance.connection.host);
  } catch (error) {
    console.log("MONGO Error :", error);
    // learn in node
    process.exit(1);
  }
};

export default connectDB;
