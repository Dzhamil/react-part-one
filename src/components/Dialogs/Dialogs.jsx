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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Andrey' id='1'/>
                <DialogItem name='Dima' id='2'/>
                <DialogItem name='Katya' id='3'/>
                <DialogItem name='Pasha' id='4'/>
                <DialogItem name='Kristina' id='5'/>
                <DialogItem name='Alena' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'></Message>
                <Message message='Hi'></Message>
                <Message message='Yo'></Message>
            </div>
        </div>
    );
}

export default Dialogs;