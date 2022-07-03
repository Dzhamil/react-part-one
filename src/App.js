import s from './App.module.css';

import React from "react";
import HeaderContainer from "./components/header/HeaderContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import Content from "./components/content/Content";

const App = () => {
    return (
        <div className={s.appWrapper}>
            <HeaderContainer/>
            <NavbarContainer/>
            <Content/>
        </div>
    );
}

export default App;
