import React from 'react';
import classes from './FriensWidget.module.css';
import FriendItem from "./FriendItem/FriendItem";

/*const FriendsWidget = (props) => {
    let friendsElements = props.friends.map( f => <FriendItem name={f.name} key={f.id} />);

    return (
        <div className={classes.friendBlock}>
            <h3>Friends</h3>
            <div className={classes.friends}>
                {friendsElements}
            </div>
        </div>
    );
}*/

class FriendsWidget extends React.Component {
    constructor(props) {
        super(props);

        this.friendsElements = this.props.friends.map( f => <FriendItem name={f.name} key={f.id} />);
    }

    render() {
        return (
            <div className={classes.friendBlock}>
                <h3>Friends</h3>
                <div className={classes.friends}>
                    {this.friendsElements}
                </div>
            </div>
        );
    }
}

export default FriendsWidget;