import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images",
    allowedFormats: ["jpg", "png", "jpeg"],
    public_id: (req, file) => file.originalname.split(".")[0] + "",
  },
});

const imageUploader = multer({ storage });
const uploadMultiple = imageUploader.array("images", 10);

export { uploadMultiple };