import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts }>
               <Post message='Hi, have are you?' likeCounts='5'/>
               <Post message="It's my first posts" likeCounts='20'/>
            </div>
        </div>
    );
}

export default MyPosts;