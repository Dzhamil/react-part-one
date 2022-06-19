import s from './App.module.css';

import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";

const App = (props) => {
    return (
        <div className={s.appWrapper}>
            <Header state={props.state.header}/>
            <Navbar state={props.state.navbar}/>
            <Content state={props.state.content} dispatch={props.dispatch}/>
        </div>
    );
}

export default App;
