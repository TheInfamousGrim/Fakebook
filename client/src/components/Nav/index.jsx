import React from "react";
import "../../index.css";
import Logo from "../../assets/svg/logo";
import Search from "../../assets/svg/search";
import Plus from "../../assets/svg/plus";
import Messenger from "../../assets/svg/messenger";
import Bell from "../../assets/svg/bell";
import Watch from "../../assets/svg/watch";
import Home from "../../assets/svg/home";
import Gaming from "../../assets/svg/gaming";
import Friends from "../../assets/svg/friends";
function Nav() {
  return (
    <div className="h-14 w-screen flex justify-between shadow-fb px-4 py-2 border-b border-b-purple-300">
      <div className="flex">
        <Logo />
        <div className="h-10 w-60 flex items-centre rounded-full bg-dGrey p-3">
          <Search />
          <input
            className="text-white ml-2 bg-dGrey focus:outline-none"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex space-x-24 cursor-pointer ">
        <button className="focus:outline-none">
          <Home />
        </button>
        <button className="focus:outline-none">
          <Watch />
        </button>
        <button className="focus:outline-none">
          <Friends />
        </button>
        <button className="focus:outline-none">
          <Gaming />
        </button>
      </div>
      <div className="flex space-x-2">
        <div className="w-10 bg-dGrey flex items-center justify-center rounded-full">
          <Plus />
        </div>
        <div className="w-10 bg-dGrey flex items-center justify-center rounded-full relative">
          <Messenger />
        </div>
        <div className="w-10 bg-dGrey flex items-center justify-center rounded-full relative">
          <Bell />
        </div>
        <div className="h-9 p-0.5 flex items-center justify-center">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            className="rounded-full border w-10 h-10 border-dGrey"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
