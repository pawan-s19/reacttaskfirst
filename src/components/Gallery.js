import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Gallery = () => {
  const [imageData, setImageData] = useState([]);

  const apiCall = async () => {
    let { data } = await axios.get("https://picsum.photos/v2/list");
    console.log(data);
    setImageData(data);
  };

  useEffect(() => {
    //everything here runs on every render
    apiCall();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center bg-secondary text-light p-3">Gallery App</h1>

      <div className="d-flex flex-wrap">
        {imageData.map((e) => {
          return (
            <div className="card m-3" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={e.download_url}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{e.author}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
