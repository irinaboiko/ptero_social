import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg" />
            <div className={styles.postContentWrapper}>
                <span>{props.message}</span>
                <span>{props.likesCount} &#128156;</span>
            </div>
        </div>        
    );
}

export default Post;