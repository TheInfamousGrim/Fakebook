import React from "react";
import "./index.css";
import Nav from "./components/Nav/index";
import Header from "./components/header/index";
import Intro from "./components/intro/index";
import Photos from "./components/photos/index";
import CreatePost from "./components/createPost";
import FriendList from "./components/Friends";
import Post from "./components/post";

function App() {
  return (
    <div className="antialiased">
      <Nav />
      <Header />
      <div className="bg-dark px-52 grid grid-cols-12 mt-4 z-10 gap-4 antialiased">
        <div className="col-span-5 col-start-1 row-start-1 mt-8 space-y-4">
          <Intro />

          <Photos />

          <FriendList />
        </div>
        <div className=" flex-row col-span-7 col-start-6 row-start-1 mt-8 space-y-4">
          <CreatePost />
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
