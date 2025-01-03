import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./DB/connectDB.js";

import bodyParser from "body-parser";
import cors from "cors";
import imageRoutes from "./Routes/imageRoutes.js";

connectDB();
const PORT = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/api/v1/images", imageRoutes);




app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
