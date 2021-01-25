import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Dima</div>
                <div className={s.dialog}>Katya</div>
                <div className={`${s.dialog} ${s.active}`}>Pasha</div>
                <div className={s.dialog}>Kristina</div>
                <div className={s.dialog}>Alena</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;