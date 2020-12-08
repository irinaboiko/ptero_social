import React from 'react';
import classes from './../FriensWidget.module.css';

const FriendItem = (props) => {
    return (
        <div className={classes.friendItem}>
            <span className={classes.friendPhoto}></span>
            <span className={classes.friendName}>{props.name}</span>
        </div>
    );
}

export default FriendItem;
