import React from 'react';
import {connect} from "react-redux";
import FriendsWidget from "./FriendsWidget";

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friendsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsWidget);

export default FriendsWidgetContainer;