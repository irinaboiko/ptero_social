import React from 'react';
import styles from './ProfileInfo.module.css';

/*const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.coverWrapper}></div>
            <div className={styles.descriptionBlock}>
                <div className={styles.userPhoto}></div>
                <div className={styles.userName}>Ruru</div>
                <div className={styles.userBio}>I like cats and pizza (just not with pineapples)</div>
			</div>
        </div>
    );
}*/

class ProfileInfo extends React.Component{
    render() {
        return (
            <div>
                <div className={styles.coverWrapper}></div>
                <div className={styles.descriptionBlock}>
                    <div className={styles.userPhoto}></div>
                    <div className={styles.userName}>Ruru</div>
                    <div className={styles.userBio}>I like cats and pizza (just not with pineapples)</div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;