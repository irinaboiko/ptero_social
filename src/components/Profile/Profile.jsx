import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

/*const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}*/

class Profile extends React.Component {
    render() {
        return (
            <div>
                <ProfileInfo />
                <MyPostsContainer />
            </div>
        );
    }
}

export default Profile;