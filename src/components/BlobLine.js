import React from "react";
import "../stylesheets/blobline.css";
const BlobLine = () => {
  return (
    <div className="blob-line d-flex flex-column align-items-center">
      <div className="blob"></div>
      <div className="line"></div>
    </div>
  );
};

export default BlobLine;
