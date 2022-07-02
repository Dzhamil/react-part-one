import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatarUrl}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} src={m.src}/>);

    let sendMessage = () => {
        props.addNewDialogMessage();
    }

    let onDialogChange = (event) => {
        let message = event.target.value;
        props.updateNewDialogMessage(message);
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                <div className={s.header}>
                    <h2>Dialogs: </h2>
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

                <div className={s.bottom}>
                    <div className={s.inputMsg}>
                        <textarea onChange={onDialogChange}
                                  value={props.dialogsPage.newDialogText}
                                  cols="50"
                                  rows="4"/>
                    </div>
                    <div className={s.sendMsgBtn}>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Dialogs;