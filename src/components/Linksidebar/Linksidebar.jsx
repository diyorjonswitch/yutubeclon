import React from 'react';
import { text } from 'stream/consumers';

const Linksidebar = ({linkIcon, text, link}) => {
    return (
        <div className='sidebar__category'>
            <i className='material__icons'>
                {linkIcon}
            </i>
            <span>{text}</span>
        </div>
    );
}

export default Linksidebar;
