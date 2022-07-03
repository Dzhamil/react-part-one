import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let updateNewPostText = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
                    }

                    let state = store.getState();

                    return <MyPosts profilePage={state.profilePage}
                                    updateNewPostText={updateNewPostText}
                                    addPost={addPost}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;