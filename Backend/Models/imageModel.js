import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  imageURL: {
    type: String,
  },
  originalName: {
    type: String,
  },
  mimeType: {
    type: String,
  },
  size: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ImageModel = mongoose.model("Image", imageSchema);

export default ImageModel;
