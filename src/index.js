import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/conn.js";
const app = express();
dotenv.config();
connectDB();

/*
(async () => {
  try {
    // pending work of env 1 mongo_uri
    await mongoose.connect(
      `mongodb+srv://Neeraj:Neeraj%40123@cluster0.zlfviay.mongodb.net/${DB_NAME}`
    );
    app.on("error", (error) => {
      console.log("Error :", error);
      throw error;
    });
    // pending work of env 1 port
    app.listen(4000, () => {
      console.log(`App is listening on port 4000`);
    });
  } catch (error) {
    console.log("Error", error);
  }
})();
*/
