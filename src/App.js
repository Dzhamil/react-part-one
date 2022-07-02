import s from './App.module.css';

import React from "react";
import HeaderContainer from "./components/header/HeaderContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import ContentContainer from "./components/content/ContentContainer";

const App = (props) => {
    return (
        <div className={s.appWrapper}>
            <HeaderContainer state={props.state} />
            <NavbarContainer state={props.state} />
            <ContentContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default App;
