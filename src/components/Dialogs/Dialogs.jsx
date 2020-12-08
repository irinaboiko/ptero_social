import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from "./Message/Message";

const Dialogs = (props) => {
//debugger;
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem className={classes.dialog} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} owner={m.owner} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.messagesContainer}>
                    {messagesElements}
                </div>
                <div className={classes.inputBlock}>
                    <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;