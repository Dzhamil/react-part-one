import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                className={s.logo}
                src="https://www.clipartmax.com/png/full/246-2461592_computer-icons-electron-microscope-portable-network-icon.png"
                alt=""/>
        </header>
    );
}

export default Header;