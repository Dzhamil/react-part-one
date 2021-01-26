import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [
        {id: 0, message:'Hi, have are you?', likeCounts: 12},
        {id: 1, message:'It\'s my first posts', likeCounts: 988 }
    ];

    console.log(props.posts[0].id);

    let postsElements = posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;