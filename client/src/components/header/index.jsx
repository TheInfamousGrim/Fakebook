import React from "react";
import "../../index.css";
import Edit from "../../assets/svg/edit";

function Header() {
  return (
    <div className="px-44">
      <div>
        <div className="relative w-full h-96 rounded-b flex justify-center">
          <img
            src="https://picsum.photos/id/1015/1500"
            className="object-cover w-full h-full rounded-b-3xl rounded-t-3xl"
            alt="cover"
          />
          <img
            src="https://picsum.photos/id/1012/1000"
            className="object-cover absolute -bottom-20 left-20 border-4 border-dGrey w-40 h-40 rounded-full"
            alt="user"
          />
        </div>
        <div className="flex justify-between mb-12 ">
          <div className="">
            <div className="ml-64 mt-4 text-3xl text-whitish">John Smith</div>
            <div className="ml-64 text-sm ">2k Friends</div>
            <div></div>
          </div>
          <div className="focus:outline-none h-9 w-28 flex items-center justify-center rounded-full bg-dGrey">
            <button className="flex flex-row items-center text-xs">
              <Edit />
              Edit profile
            </button>
          </div>
        </div>
        <div className="border border-whitish mt-6 border-opacity-20" />
        <div className="flex items-start mr-2">
          <button className="px-4 h-10 bg-background text-fill hover:border-b-2 border-pink hover:text-pink">
            Posts
          </button>
          <button className="px-4 h-10 bg-background text-fill hover:border-b-2 border-pink hover:text-pink">
            About
          </button>
          <button className="px-4 h-10 bg-background text-fill hover:border-b-2 border-pink hover:text-pink">
            Friends
          </button>
          <button className="px-4 h-10 bg-background text-fill hover:border-b-2 border-pink hover:text-pink">
            Photos
          </button>
          <button className="px-4 h-10 bg-background text-fill hover:border-b-2 border-pink hover:text-pink">
            Videos
          </button>
          <button className="px-4 h-10 bg-background text-fill hover:border-b-2 border-pink hover:text-pink">
            Check-In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
