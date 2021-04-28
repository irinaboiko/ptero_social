import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.inputBlock}>
            <Field component="textarea" name="newPostText" placeholder="What's happening?" />
            <button className={styles.addPostButton}>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
