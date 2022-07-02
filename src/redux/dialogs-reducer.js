const UPDATE_NEW_DIALOG_MESSAGE = 'UPDATE-NEW-DIALOG-MESSAGE';
const ADD_NEW_DIALOG_MESSAGE = 'ADD_NEW_DIALOG_MESSAGE';

let initialState = {
    dialogs: [
        {
            id: 0,
            name: 'Dzhamil',
            avatarUrl: 'https://maski-instagrama.ru/wp-content/uploads/a/6/c/a6c8a2ce39a7a097395e72c9e778a381.jpeg'
        },
        {
            id: 1,
            name: 'Dima',
            avatarUrl: 'https://pbs.twimg.com/profile_images/998651045491367939/ySo7CMSH.jpg'
        },
        {
            id: 2,
            name: 'Katya',
            avatarUrl: 'https://proprikol.ru/wp-content/uploads/2019/09/prikolnye-foto-na-avu-dlya-devochek-60.jpg'
        },
        {
            id: 3,
            name: 'Pasha',
            avatarUrl: 'https://vraki.net/sites/default/files/mood/zh.jpg'
        },
        {
            id: 4,
            name: 'Kristina',
            avatarUrl: 'https://w-dog.ru/wallpapers/4/0/460972246140572/devushka-pomada-krasnye-guby-shlyapa-ruka-kolca.jpg'
        },
        {
            id: 5,
            name: 'Alena',
            avatarUrl: 'https://klike.net/uploads/posts/2018-06/1528374055_2.jpg'
        }
    ],
    messages: [
        {id: 0, src: 'producer', message: 'Hello'},
        {
            id: 1,
            src: 'producer',
            message: 'Have are you? Have are you? Have are you? Have are you? Have are you? Have are you? Have are you? Have are you?'
        },
        {id: 1, src: 'consumer', message: 'Fine'},
        {id: 1, src: 'producer', message: 'What?'},
        {id: 2, src: 'consumer', message: 'Yo'}
    ],
    newDialogText: ''
}

const dialogsReducer = (state = initialState, action) => {
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