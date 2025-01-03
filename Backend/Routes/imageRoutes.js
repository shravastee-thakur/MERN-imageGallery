import express from "express";
import { uploadMultiple } from "../Middlewares/imageUploader.js";
import {
  getAllImages,
  getImages,
  singleImage,
} from "../Controllers/imageContorller.js";

const router = express.Router();

router.get("/get-images", getAllImages);
router.get("/single-image/:id", singleImage);

router.post("/upload-image", uploadMultiple, getImages);

export default router;
