import React from "react";
import s from './Content.module.css';
import {Route} from "react-router-dom";
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import Profile from "./profile/Profile";
import DialogsContainer from "./dialogs/DialogsContainer";


const Content = () => {
    return (
        <div className={s.appWrapperContent}>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/news' component={() => <News/>}/>
            <Route exact path='/music' render={() => <Music/>}/>
            <Route exact path='/settings' render={() => <Settings/>}/>
        </div>
    );
}

export default Content;