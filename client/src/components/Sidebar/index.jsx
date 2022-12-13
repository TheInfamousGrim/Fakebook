// Dependencies
import React from 'react';

// Components
import SidebarRow from '../SideBarRow';

function Sidebar() {
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow
                src="https://res.cloudinary.com/dc2cdyype/image/upload/v1670931319/Fakebook/Rectangle_bqebp7.png"
                title="Mai Valentine"
            />
            <SidebarRow Icon="fa-solid fa-user" title="Friends" />
            <SidebarRow Icon="fa-solid fa-users" title="Groups" />
            <SidebarRow Icon="fa-solid fa-cart-shopping" title="Marketplace" />
            <SidebarRow Icon="fa-solid fa-desktop" title="Watch" />
            <SidebarRow Icon="fa-solid fa-calendar-days" title="Events" />
            <SidebarRow Icon="fa-solid fa-clock" title="Memories" />
            <SidebarRow Icon="fa-solid fa-chevron-down" title="See More" />
        </div>
    );
}

export default Sidebar;
