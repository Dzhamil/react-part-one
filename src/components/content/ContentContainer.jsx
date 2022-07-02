import React from "react";
import s from './Content.module.css';
import {Route} from "react-router-dom";
import News from "./news/News";
import Music from "./music/Music";
import Settings from "./settings/Settings";
import ProfileContainer from "./profile/ProfileContainer";
import DialogsContainer from "./dialogs/DialogsContainer";


const ContentContainer = (props) => {
    return (
        <div className={s.appWrapperContent}>
            <Route path='/profile' render={() => <ProfileContainer state={props.state} dispatch={props.dispatch}/>} />
            <Route path='/dialogs' render={() => <DialogsContainer state={props.state} dispatch={props.dispatch}/>} />
            <Route path='/news' component={() => <News/>} />
            <Route exact path='/music' render={() => <Music/>} />
            <Route exact path='/settings' render={() => <Settings/>} />
        </div>
    );
}

export default ContentContainer;