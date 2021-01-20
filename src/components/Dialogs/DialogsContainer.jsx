import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

/*compose(
    connect(mapStateToProps, { updateNewMessageBody, sendMessage }),
    withAuthRedirect
)(Dialogs);

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
})(AuthRedirectComponent);*/

export default compose(
    connect(mapStateToProps, { updateNewMessageBody, sendMessage }),
    withAuthRedirect
)(Dialogs);;