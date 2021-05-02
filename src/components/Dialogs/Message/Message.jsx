import React from 'react';
import classes from './../Dialogs.module.css';

class Message extends React.Component {
    render() {
        return (
            <div className={`${classes.message} ${classes[this.props.owner]}`}>{this.props.message}</div>
        );
    }
}

export default Message;