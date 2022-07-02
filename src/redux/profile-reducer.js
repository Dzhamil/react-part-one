const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 0, message: 'Hi, have are you?', likeCounts: 12},
        {id: 1, message: 'It\'s my first posts', likeCounts: 988}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return _addPost(state);
        case UPDATE_NEW_POST_TEXT:
            return _updateNewPostText(state, action.newText);
        default:
            return state;
    }
}

const _addPost = (state)  => {
    let newPost = {
        id: 33,
        message: state.newPostText,
        likeCounts: 0
    };
    state.posts.push(newPost);
    state.newPostText = '';
    return state;
}

const _updateNewPostText = (state, newText) => {
    state.newPostText = newText;
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;