import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://img3.goodfon.ru/original/2560x1600/3/51/avatar-neytiri-zoe-saldana-6192.jpg" alt=""/>
            {props.message}
            <div>
                <span>
                   like counts = {props.likeCounts}
                </span>
            </div>
        </div>
    );
}

export default Post;