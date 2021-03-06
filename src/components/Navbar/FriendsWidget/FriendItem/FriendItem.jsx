import React from 'react';
import classes from './../FriensWidget.module.css';

/*const FriendItem = (props) => {
    return (
        <div className={classes.friendItem}>
            <span className={classes.friendPhoto}></span>
            <span className={classes.friendName}>{props.name}</span>
        </div>
    );
}*/

class FriendItem extends React.Component {
    render() {
        return (
            <div className={classes.friendItem}>
                <span className={classes.friendPhoto}></span>
                <span className={classes.friendName}>{this.props.name}</span>
            </div>
        );
    }
}

export default FriendItem;
