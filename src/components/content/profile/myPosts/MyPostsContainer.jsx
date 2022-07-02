import React from "react";
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let updateNewPostText = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts profilePage={props.state.profilePage} updateNewPostText={updateNewPostText} addPost={addPost}/>
    );
}

export default MyPostsContainer;