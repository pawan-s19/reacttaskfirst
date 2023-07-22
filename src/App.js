import React from "react";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import GalleryItem from "./components/GalleryItem";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/:id" element={<GalleryItem />} />
      </Routes>
    </>
  );
};

//JSX - writing javascript in html
//for eg -- <h1>{javascript}</h1>
export default App;
