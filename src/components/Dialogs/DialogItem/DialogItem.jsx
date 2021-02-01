import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <div className={s.avatarImg}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.navLink}>
                <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default DialogItem;