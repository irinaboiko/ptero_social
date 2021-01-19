import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem className={styles.dialog} name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} owner={m.owner} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialogsWrapper}>
                    {dialogsElements}
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.messagesWrapper}>
                    <div className={styles.messagesContainer}>
                        {messagesElements}
                    </div>
                    <div className={styles.inputBlock}>
                        <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea>
                        <button onClick={onSendMessageClick} className={styles.sendButton}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;