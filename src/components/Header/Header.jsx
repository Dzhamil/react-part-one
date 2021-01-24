import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://i7.pngflow.com/pngimage/554/814/png-google-chrome-web-browser-computer-icons-firefox-logo-monochrome-google-chrome-chrome-os-clipart-thumb.png"
                alt=""/>
        </header>
    );
}

export default Header;