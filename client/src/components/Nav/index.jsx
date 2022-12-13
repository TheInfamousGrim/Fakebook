import React, { useState, useRef } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

// Asset imports
import Logo from '../../assets/svg/logo';
import Search from '../../assets/svg/search';
import Plus from '../../assets/svg/plus';
import Messenger from '../../assets/svg/messenger';
import Bell from '../../assets/svg/bell';
import Watch from '../../assets/svg/watch';
import Home from '../../assets/svg/home';
import HomeActive from '../../assets/svg/homeActive';
import Gaming from '../../assets/svg/gaming';
import Friends from '../../assets/svg/friends';

// Helpers
import useClickOutside from '../../utils/useClickOutside';

// Component imports
import UserMenu from './UserMenu';

function Nav() {
    // State
    const [activeItem, setActiveItem] = useState('');
    const [showUserMenu, setShowUserMenu] = useState(false);

    // Refs
    const userMenu = useRef(null);

    // Handle functions
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };
    useClickOutside(userMenu, () => {
        setShowUserMenu(false);
    });

    return (
        <Menu className="h-14 w-screen flex justify-between shadow-fb px-4 py-2 border-b border-whitish border-opacity-20 bg-background">
            <div className="flex">
                <NavLink className="focus:outline-none mr-2" to="/">
                    <Logo />
                </NavLink>
                <div className="h-10 w-60 flex items-centre rounded-full bg-dGrey p-3">
                    <Search />
                    <input className="text-white ml-2 bg-dGrey focus:outline-none" placeholder="Search Facebook" />
                </div>
            </div>
            <ul className="flex space-x-24">
                <li className="focus:fill-pink border-pink hover:border-b-2 border-pink">
                    <NavLink className="fill-pink" to="/home">
                        {({ isActive }) => (isActive ? <HomeActive /> : <Home />)}
                    </NavLink>
                </li>
                <li className="focus:fill-pink border-pink hover:border-b-2 border-pink">
                    <Menu.Item
                        className="focus:fill-pink hover:border-b-2 border-pink hover:fill-pink cursor-pointer active:fill-pink"
                        active={activeItem === 'watch'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/"
                    >
                        <Watch />
                    </Menu.Item>
                </li>
                <li className="focus:fill-pink border-pink hover:border-b-2 border-pink">
                    <Menu.Item
                        className="focus:fill-pink hover:border-b-2 border-pink hover:fill-pink cursor-pointer active:fill-pink"
                        active={activeItem === 'friends'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/"
                    >
                        <Friends />
                    </Menu.Item>
                </li>
                <li className="focus:fill-pink border-pink hover:border-b-2 border-pink">
                    <Menu.Item
                        className="focus:fill-pink hover:border-b-2 border-pink hover:fill-pink cursor-pointer active:fill-pink"
                        active={activeItem === 'gaming'}
                        onClick={handleItemClick}
                        as={Link}
                        to="/"
                    >
                        <Gaming />
                    </Menu.Item>
                </li>
            </ul>
            <ul className="flex space-x-2 mr-2">
                <li className="w-10 bg-dGrey flex items-center justify-center rounded-full">
                    <Menu.Item className="focus:outline-none">
                        <Plus />
                    </Menu.Item>
                </li>
                <li className="w-10 bg-dGrey flex items-center justify-center rounded-full relative">
                    <Menu.Item className="focus:outline-none ">
                        <Messenger />
                    </Menu.Item>
                </li>
                <li className="w-10 bg-dGrey flex items-center justify-center rounded-full relative">
                    <Menu.Item className="focus:outline-none">
                        <Bell />
                    </Menu.Item>
                </li>
                <li className="h-9 p-0.5 flex items-center justify-center">
                    <Menu.Item
                        className="focus:outline-none cursor-pointer"
                        onClick={() => {
                            setShowUserMenu((prev) => !prev);
                        }}
                    >
                        <img
                            src="https://res.cloudinary.com/dc2cdyype/image/upload/v1670931319/Fakebook/Rectangle_bqebp7.png"
                            className="rounded-full border w-10 h-10 border-dGrey"
                            alt="user-profile"
                        />
                        {showUserMenu && <UserMenu />}
                    </Menu.Item>
                </li>
            </ul>
        </Menu>
    );
}

export default Nav;
