import React from 'react';
import s from './MessageItem.module.css'


const MessageItem = (props) => {
    let src;
    props.src === "consumer" ? src = s.consumer : src = s.producer;

    return (
        <div className={s.messageItem}>
            <div>
                <h3 className={src}>
                    {props.message}
                </h3>
            </div>
        </div>
    );
}

export default MessageItem;