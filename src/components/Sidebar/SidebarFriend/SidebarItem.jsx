import React from 'react';
import s from './SidebarItem.module.css';

const SidebarItem = (props) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src={props.avatarUrl} alt="avatar"/>
            </div>
            <div className={s.userName}>
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default SidebarItem;