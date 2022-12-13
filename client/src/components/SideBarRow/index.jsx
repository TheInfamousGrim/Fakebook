import React from 'react';

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-dGrey rounded-xl cursor-pointer">
            {src && <img className="rounded-full w-10 h-10" src={src} layout="fixed" alt="current user" />}
            {Icon && <i className={`text-3xl text-pink ${Icon}`} />}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    );
}

export default SidebarRow;
