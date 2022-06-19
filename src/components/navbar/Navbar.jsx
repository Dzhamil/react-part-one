import React from "react";
import s from './Navbar.module.css';
import NavbarItem from "./navbarItem/NavbarItem";
import Sidebar from "./sidebar/Sidebar";


const Navbar = (props) => {
    let navbarItems = props.state.navbarItems.map(item => <NavbarItem path={item.to} itemName={item.itemName}/>);
    return (
        <nav className={s.nav}>
            <div>
                {navbarItems}
            </div>
            <div>
                <Sidebar friends={props.state.friends}/>
            </div>
        </nav>
    );
}

export default Navbar;