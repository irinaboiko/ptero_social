import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from "./Message/Message";

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

/*class Dialogs extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.dialogsPage;
        this.dialogsElements = this.state.dialogs.map(d => <DialogItem className={styles.dialog} name={d.name} key={d.id} id={d.id}/>);
        this.messagesElements = this.state.messages.map(m => <Message message={m.message} key={m.id} owner={m.owner} />);
        this.newMessageBody = this.state.newMessageBody;

        this.onSendMessageClick = () => {
            this.props.sendMessage();
        }

        this.onNewMessageChange = (event) => {
            this.body = event.target.value;
            this.props.updateNewMessageBody(this.body);
        }
    }


    render() {
        return (
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <div className={styles.dialogsWrapper}>
                        {this.dialogsElements}
                    </div>
                </div>
                <div className={styles.messages}>
                    <div className={styles.messagesWrapper}>
                        <div className={styles.messagesContainer}>
                            {this.messagesElements}
                        </div>
                        <div className={styles.inputBlock}>
                            <textarea onChange={this.onNewMessageChange} value={this.newMessageBody} placeholder='Enter your message'></textarea>
                            <button onClick={this.onSendMessageClick} className={styles.sendButton}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}*/

export default Dialogs;