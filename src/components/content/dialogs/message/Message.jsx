import React from 'react';
import s from './Message.module.css'
import MessageItem from "./messageItems/MessageItem";
import MessageItemEmpty from "./messageItems/MessageItemEmpty";


const Message = (props) => {
    let producer;
    let consumer;

    if (props.src === 'consumer') {
        consumer = <MessageItem src={props.src} message={props.message}/>
        producer = <MessageItemEmpty />
    } else {
        producer = <MessageItem src={props.src} message={props.message}/>
        consumer = <MessageItemEmpty />
    }

    return (
        <div className={s.message}>
            <div>
                {producer}
            </div>
            <div>
                {consumer}
            </div>
        </div>
    );
}

export default Message;