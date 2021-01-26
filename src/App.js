import './App.css';

import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapper-content'>
                    <Route path='/profile' render={() => <Profile />}/>
                    <Route path='/dialogs' render={() => <Dialogs />}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
