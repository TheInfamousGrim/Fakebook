import React from 'react';
import '../../index.css';
import Logo from '../../assets/svg/logo';
import Search from '../../assets/svg/search';
import Plus from '../../assets/svg/plus';
import Messenger from '../../assets/svg/messenger';
import Bell from '../../assets/svg/bell';
import Watch from '../../assets/svg/watch';
import Home from '../../assets/svg/home';
import Gaming from '../../assets/svg/gaming';
import Friends from '../../assets/svg/friends';

function Nav() {
    return (
        <div className="h-14 w-screen flex justify-between shadow-fb px-4 py-2 border-b border-whitish border-opacity-20">
            <div className="flex">
                <button className="focus:outline-none">
                    <Logo />
                </button>
                <div className="h-10 w-60 flex items-centre rounded-full bg-dGrey p-3">
                    <Search />
                    <input className="text-white ml-2 bg-dGrey focus:outline-none" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="flex space-x-24 cursor-pointer ">
                <button className="focus:outline-none hover:border-b-2 border-pink hover:fill-pink">
                    <Home />
                </button>
                <button className="focus:outline-none hover:border-b-2 border-pink hover:fill-pink">
                    <Watch />
                </button>
                <button className="focus:outline-none hover:border-b-2 border-pink hover:fill-pink">
                    <Friends />
                </button>
                <button className="focus:outline-none hover:border-b-2 border-pink hover:fill-pink">
                    <Gaming />
                </button>
            </div>
            <div className="flex space-x-2 mr-2">
                <div className="w-10 bg-dGrey flex items-center justify-center rounded-full">
                    <button className="focus:outline-none">
                        <Plus />
                    </button>
                </div>
                <div className="w-10 bg-dGrey flex items-center justify-center rounded-full relative">
                    <button className="focus:outline-none ">
                        <Messenger />
                    </button>
                </div>
                <div className="w-10 bg-dGrey flex items-center justify-center rounded-full relative">
                    <button className="focus:outline-none">
                        <Bell />
                    </button>
                </div>
                <div className="h-9 p-0.5 flex items-center justify-center">
                    <button className="focus:outline-none">
                        {' '}
                        <img
                            src="https://picsum.photos/seed/picsum/200/300"
                            className="rounded-full border w-10 h-10 border-dGrey"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nav;
