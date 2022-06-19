import React from "react";
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                className={s.logo}
                src={props.state.img.url}
                alt={props.state.img.alt}/>
        </header>
    );
}

export default Header;