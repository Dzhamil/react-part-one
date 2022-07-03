import React from 'react';
import {addNewDialogMessageActionCreator, updateNewDialogMessageActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();

                let addNewDialogMessage = () => {
                    state.dispatch(addNewDialogMessageActionCreator());
                }

                let updateNewDialogMessage = (message) => {
                    state.dispatch(updateNewDialogMessageActionCreator(message));
                }

                return <Dialogs addNewDialogMessage={addNewDialogMessage}
                                updateNewDialogMessage={updateNewDialogMessage}
                                dialogsPage={state.dialogsPage}/>
            }
            }

        </StoreContext.Consumer>

    );
}

export default DialogsContainer;