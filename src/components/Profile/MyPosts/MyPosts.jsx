import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let textPost = newPostElement.current.value;
        props.updateNewPostText(textPost);
    }

    return (
        <div className={styles.postsBlock}>
            <h2>My posts</h2>
            <div className={styles.inputBlock}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder="What's happening?"/>
                <button onClick={ onAddPost } className={styles.addPostButton}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;