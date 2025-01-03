import ImageModel from "../Models/imageModel.js";

export const getAllImages = async (req, res) => {
  try {
    const data = await ImageModel.find();
    res.status(200).json({
      success: true,
      data: data,
      message: "Images fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const singleImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await ImageModel.findById(imageId);
    res.status(200).json({
      success: true,
      data: image,
      message: "Image fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getImages = async (req, res) => {
  try {
    const images = req.files.map((file) => ({
      mimeType: file.mimetype,
      originalName: file.originalname,
      size: file.size,
      imageURL: file.path,
    }));
    await ImageModel.insertMany(images);

    res.status(200).json({
      success: true,
      data: req.files,
      message: "Images uploaded successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
