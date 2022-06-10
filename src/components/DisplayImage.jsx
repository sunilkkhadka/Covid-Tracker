import React from "react";
import { useSelector } from "react-redux";
import "./displayImage.scss";

const DisplayImage = () => {
  const imageFetch = useSelector((state) => state.image.images);

  return (
    <div className="img-container">
      <img src={imageFetch} alt="" />
    </div>
  );
};

export default DisplayImage;
