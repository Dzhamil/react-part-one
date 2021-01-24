import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://img3.goodfon.ru/original/2560x1600/3/51/avatar-neytiri-zoe-saldana-6192.jpg" alt=""/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;