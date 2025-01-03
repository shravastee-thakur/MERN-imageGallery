import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";

const ImageGallery = () => {
  const [imageList, setImageList] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/images/get-images",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data } = await response.json();
      setImageList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const onDrop = async (acceptedFiles) => {
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("images", file);
    });
    try {
      const url = "http://localhost:3000/api/v1/images/upload-image";
      const options = {
        method: "POST",
        body: formData,
      };

      const result = await fetch(url, options);
      const data = await result.json();
      console.log(data);
      if (data.success) {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="d-flex flex-column align-items-center w-50 mt-5 m-auto">
      <h1 className="mb-4">Image Gallery App</h1>

      {/* Image upload or Drag and Drop */}

      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag and Drop or Click to Upload</p>
      </div>
      {/* Image preview */}

      <div className="d-flex flex-column w-100 mt-4">
        <div className="image-grid">
          {imageList.map((image, id) => (
            <div className="image-card" key={id}>
              <Link to={`/${id}`} />
              <img src={image.imageURL} alt={image.originalName} />
              <p>{image.originalName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
