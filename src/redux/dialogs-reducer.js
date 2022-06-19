const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';
const ADD_NEW_DIALOG_MESSAGE = 'ADD_NEW_DIALOG_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG_MESSAGE:
            return _addNewDialogMessage(state);
        case UPDATE_NEW_DIALOG_MESSAGE:
            return _updateNewDialogMessage(state, action.newMessage);
        default:
            return state;
    }
}

const _addNewDialogMessage = (state) => {
    let newDialogText = state.newDialogText;
    if (newDialogText !== '') {
        let newDialogMessage = {
            id: 1,
            src: 'consumer',
            message: newDialogText,
        };
        state.messages.push(newDialogMessage);
        state.newDialogText = '';
    }
    return state;
}

const _updateNewDialogMessage = (state, newMessage) => {
    state.newDialogText = newMessage;
    return state;
}

export const addNewDialogMessageActionCreator = () => ({type: ADD_NEW_DIALOG_MESSAGE})
export const updateNewDialogMessageActionCreator = (message) => ({type: UPDATE_NEW_DIALOG_MESSAGE, newMessage: message})

export default dialogsReducer;