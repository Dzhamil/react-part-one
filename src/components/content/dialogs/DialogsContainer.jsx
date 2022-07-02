import React from 'react';
import {addNewDialogMessageActionCreator, updateNewDialogMessageActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let addNewDialogMessage = () => {
        props.dispatch(addNewDialogMessageActionCreator());
    }

    let updateNewDialogMessage = (message) => {
        props.dispatch(updateNewDialogMessageActionCreator(message));
    }

    return (
        <Dialogs addNewDialogMessage={addNewDialogMessage}
                 updateNewDialogMessage={updateNewDialogMessage}
                 dialogsPage={props.state.dialogsPage}/>
    );
}

export default DialogsContainer;