import React from "react";
import s from './Content.module.css';
import {Route} from "react-router-dom";
import Profile from "./profile/Profile";
import Dialogs from "./dialogs/Dialogs";
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";


const Content = (props) => {
    return (
        <div className={s.appWrapperContent}>
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
            <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route exact path='/music' render={() => <Music/>}/>
            <Route exact path='/settings' render={() => <Settings/>}/>
        </div>
    );
}

export default Content;