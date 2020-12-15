import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/img/userPhotoDefault.png';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.usersSection}>
            <div>
                {pages.map( p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={ (e) => props.onPageChanged(p) }>{p}</span>
                })}
            </div>
            <div className={styles.usersWrapper}>
                {
                    props.users.map( u => (
                        <div key={u.id} className={styles.userBlock}>
                            <div className={styles.photoBlock}>
                                <div>
                                    <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} />
                                </div>
                                <div>
                                    { u.followed
                                        ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                                        : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}

                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className={styles.userName}>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>{"u.location.city"}, {"u.location.country"}</div>
                            </div>
                        </div> )
                    )
                }
            </div>
        </div>
    )
}
export default Users;