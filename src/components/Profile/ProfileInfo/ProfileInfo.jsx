import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhotoDefault from './../../../assets/img/userPhotoDefault.png';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div>
            <div className={styles.coverWrapper}></div>
            <div className={styles.descriptionBlock}>
                <div className={styles.userPhoto}>
                    <img src={props.profile.photos.large ? props.profile.photos.large : userPhotoDefault } />
                </div>
                <div className={styles.userName}>{props.profile.fullName}</div>
                {/*<div className={styles.userBio}>I like cats and pizza (just not with pineapples)</div>*/}
                <div className={styles.userBio}>{ props.profile.aboutMe ? props.profile.aboutMe : 'There should be BIO...'}</div>
                <ProfileStatus status={"I like cats"} />
            </div>
        </div>
    );
}

export default ProfileInfo;