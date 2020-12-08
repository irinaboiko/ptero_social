import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg" />
            {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>        
    );
}

export default Post;