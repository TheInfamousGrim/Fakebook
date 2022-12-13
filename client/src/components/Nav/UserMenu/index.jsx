import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../../utils/Auth.js';

export default function UserMenu() {
    const [visible, setVisible] = useState();

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <div className="p-2.5 absolute right-0 z-50 w-56 origin-top-right bg-background rounded-xl shadow-lg shadow-black">
            <Link to="/profile" className="flex flex-row items-center p-1.5 rounded-xl gap-1.5 hover:bg-hoverGrey">
                <img
                    src="https://res.cloudinary.com/dc2cdyype/image/upload/v1670931319/Fakebook/Rectangle_bqebp7.png"
                    className="rounded-full border w-10 h-10 border-dGrey"
                    alt="The current user"
                />
                <div className="flex flex-col justify-center">
                    <span>Mai Valentine</span>
                </div>
            </Link>
            <div className="border border-whitish mt-6 border-opacity-20" />
            <div className="p-2.5 mt-1.5 flex items-center gap-1 hover:bg-hoverGrey rounded-xl">
                <div className="relative h-9 w-9 rounded-full flex items-center justify-center mr-2.5 bg-dGrey">
                    <i className="fa-solid fa-gear" />
                </div>
                <p>Settings & Privacy</p>
            </div>
            <div className="p-2.5 mt-1.5 flex items-center gap-1 hover:bg-hoverGrey rounded-xl">
                <div className="relative h-9 w-9 rounded-full flex items-center justify-center mr-2.5 bg-dGrey">
                    <i className="fa-solid fa-circle-question" />
                </div>
                <p>Help & Support</p>
            </div>
            <div className="p-2.5 mt-1.5 flex items-center gap-1 hover:bg-hoverGrey rounded-xl">
                <div className="relative h-9 w-9 rounded-full flex items-center justify-center mr-2.5 bg-dGrey">
                    <i className="fa-solid fa-moon" />
                </div>
                <p>Display & Accessibility</p>
            </div>
            <div className="p-2.5 mt-1.5 flex items-center gap-1 hover:bg-hoverGrey rounded-xl">
                <div className="relative h-9 w-9 rounded-full flex items-center justify-center mr-2.5 bg-dGrey">
                    <i className="fa-solid fa-message-exclamation" />
                </div>
                <p>Give feedback</p>
            </div>
            <button
                className="p-2.5 mt-1.5 flex items-center gap-1 hover:bg-hoverGrey rounded-xl w-full"
                onClick={logout}
            >
                <div className="relative h-9 w-9 rounded-full flex items-center justify-center mr-2.5 bg-dGrey">
                    <i className="fa-solid fa-right-from-bracket" />
                </div>
                <p>Log Out</p>
            </button>
        </div>
    );
}
