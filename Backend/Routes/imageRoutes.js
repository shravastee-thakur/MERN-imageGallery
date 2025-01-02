import express from "express";
import { uploadMultiple } from "../Middlewares/imageUploader.js";

const router = express.Router();

router.post("/upload-image", uploadMultiple, (req, res) => {});

export default router;
