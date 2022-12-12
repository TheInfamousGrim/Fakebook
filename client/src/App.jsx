import React from "react";
import "./index.css";
import Nav from "./components/Nav/index";
import Header from "./components/header/index";
import Intro from "./components/intro/index";
import Photos from "./components/photos/index";
import CreatePost from "./components/createPost";

function App() {
  return (
    <div>
      <div className="z-50">
        <Nav />
      </div>
      <div className="z-40">
        <Header />
      </div>
      <div className="bg-dark px-52 grid grid-cols-12 mt-4 z-10 gap-4 ">
        <div className="col-span-5 col-start-1 mt-8">
          <Intro />
        </div>
        <div className="col-span-5 col-start-1">
          <Photos />
        </div>
        <div className=" flex-row col-span-7 col-start-6 row-start-1 mt-8">
          <CreatePost />
        </div>
      </div>
    </div>
  );
}

export default App;
