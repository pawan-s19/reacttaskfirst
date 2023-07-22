import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Gallery = () => {
  const [imageData, setImageData] = useState([]);

  const apiCall = async () => {
    let { data } = await axios.get("https://picsum.photos/v2/list");
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
        {imageData.length > 0 ? (
          imageData.map((e) => {
            return (
              <Link key={e.id} to={`/${e.id}`}>
                <div
                  className="card m-3"
                  style={{
                    width: "18rem",
                    color: "black",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={e.download_url}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{e.author}</h5>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
