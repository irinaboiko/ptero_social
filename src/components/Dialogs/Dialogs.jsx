import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem className={styles.dialog} name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} owner={m.owner} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>

            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.inputBlock}>
            <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            <button className={styles.sendButton}>Send</button>
        </form>
    )

}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;