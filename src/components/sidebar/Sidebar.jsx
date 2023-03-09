import React from 'react';
import Linksidebar from '../Linksidebar/Linksidebar';
import "./sidebar.scss"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Linksidebar linkIcon="home" text="Home" link="home" />

            <Linksidebar linkIcon="local_fire_department" text="Trending" link="trending" />

            <Linksidebar linkIcon="subscriptions" text="Subcriptions" link="Subcriptions" />
            <hr />
            <Linksidebar linkIcon="library_add_check" text="Library" link="Library" />

            <Linksidebar linkIcon="history" text="History" link="History" />

            <Linksidebar linkIcon="play_arrow" text="Your Videos" link="Your-Videos" />

            <Linksidebar linkIcon="watch_later" text="Watch Later" link="Watch-Later" />

            <Linksidebar linkIcon="thumb_up" text="Liked Videos" link="Liked-Videos" />
            <hr />
        </div>
    );
}

export default Sidebar;
