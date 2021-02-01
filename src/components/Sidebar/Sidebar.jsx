import React from 'react';
import s from './Sidebar.module.css';
import SidebarItem from "./SidebarFriend/SidebarItem";

const Sidebar = (props) => {
    let friends = props.friends.map(friend => <SidebarItem name={friend.name} avatarUrl={friend.avatarUrl} />);
    return (
        <div className={s.sidebar}>
            <div className={s.header}>
                <h3>Friends: </h3>
            </div>
            <div className={s.content}>
                {friends}
            </div>
        </div>
    );
}

export default Sidebar;