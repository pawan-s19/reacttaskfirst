import React from "react";
import Assignment from "./components/Assignment";
import BlobLine from "./components/BlobLine";
import Circle from "./components/Circle";
import Heading from "./components/Heading";
import SideHeading from "./components/SideHeading";
import Timeline from "./components/Timeline";
import "./stylesheets/app.css";
const App = () => {
  return (
    <>
    {/* // <div className="parent d-flex"> */}
    //   {/* <div>
    //     <SideHeading />
    //     <Timeline />
    //   </div>
    //   <div>
    //     <Heading />
    //     <Circle />
    //     <BlobLine />
    //   </div> */}
    {/* //   <div className="left d-flex ">
    //     <SideHeading />
    //     <Timeline />
    //   </div>
    //   <div className="right"></div>
    // </div> */}
    <Assignment/>
    </>

  );
};

export default App;
