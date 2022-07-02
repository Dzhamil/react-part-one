import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>);


    let onPostAdd = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onPostAdd}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;