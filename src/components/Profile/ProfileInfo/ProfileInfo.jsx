import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdni.rt.com/russian/images/2017.04/article/58fe599bc3618843468b47c1.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
			</div>
        </div>
    );
}

export default ProfileInfo;