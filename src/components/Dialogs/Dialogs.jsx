import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatarUrl}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} src={m.src}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.header}>
                    <h2>Dialogs:  </h2>
                </div>
                <div>
                    {dialogElements}
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.header}>
                    <h2>Messages: </h2>
                </div>
                <div>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;