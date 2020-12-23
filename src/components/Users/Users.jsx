import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assets/img/userPhotoDefault.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                    return <span className={`${styles.pageNumber} ${props.currentPage === p && styles.selectedPage}`}
                                 key={p.id}
                                 onClick={ (e)  => props.onPageChanged(p) }>{p}</span>
                })}
            </div>
            <div className={styles.usersWrapper}>
                {
                    props.users.map( u => (
                        <div key={u.id} className={styles.userBlock}>
                            <div className={styles.photoBlock}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <div>
                                        <img src={ u.photos.small != null ? u.photos.small : userPhoto } className={styles.userPhoto} />
                                    </div>
                                </NavLink>
                                <div>
                                    { u.followed
                                        ? <button onClick={ () => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "2d8fb7e5-f404-4244-8053-b7559599770a"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    };
                                                });
                                        } }>Unfollow</button>
                                        : <button onClick={ () => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "2d8fb7e5-f404-4244-8053-b7559599770a"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    };
                                                });
                                        } }>Follow</button>}

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