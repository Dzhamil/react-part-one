import React from "react";
import s from './NavbarItem.module.css';
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.path} activeClassName={s.activeLink}>{props.itemName}</NavLink>
        </div>
    );
}

export default NavbarItem;