import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const GalleryItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [imageData, setImageData] = useState({});

  const fetchDetails = async () => {
    let { data } = await axios.get(`https://picsum.photos/id/${id}/info`);
    setImageData(data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <h2>Item Details</h2>
      <h4>{imageData.author}</h4>
      <h4>{imageData.id}</h4>
      <img height={100} src={imageData.download_url}></img>
      <button onClick={() => navigate(-1)}>Previous Page</button>
    </div>
  );
};

export default GalleryItem;
