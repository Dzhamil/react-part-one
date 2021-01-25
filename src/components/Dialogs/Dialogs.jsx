import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    let dialogs = [
        {id: 0, name: 'Hello'},
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Kristina'},
        {id: 5, name: 'Alena'}
    ];

    let messages = [
        {id: 0, message: 'Andrey'},
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'}
    ];

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;