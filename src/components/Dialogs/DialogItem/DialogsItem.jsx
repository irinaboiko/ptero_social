import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

/*const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}*/

class DialogItem extends React.Component {
    constructor(props) {
        super(props);

        this.path = `/dialogs/${props.id}`;
    }

    render() {
        return (
            <div className={`${classes.dialog} ${classes.active}`}>
                <NavLink to={this.path}>{this.props.name}</NavLink>
            </div>
        );
    }
}

export default DialogItem;