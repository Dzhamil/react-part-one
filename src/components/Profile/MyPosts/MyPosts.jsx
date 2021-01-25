import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts }>
               <Post message='Hi, have are you?' likeCounts='5'/>
               <Post message="It's my first posts" likeCounts='20'/>
            </div>
        </div>
    );
}

export default MyPosts;