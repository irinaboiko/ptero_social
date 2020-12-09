import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers( [
            {
                id: 1,
                followed: false,
                photoUrl: 'https://img.tsn.ua/cached/1446819823/tsn-e7757395fe937525edc97f670924f9cf/thumbs/720x1260/65/9c/e4dc63465b454a8f1df7c28bfcec9c65.jpg',
                fullName: 'Irene Ruru',
                status: 'I like cats and pizza',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 2,
                followed: true,
                photoUrl: 'https://img.tsn.ua/cached/1446819823/tsn-e7757395fe937525edc97f670924f9cf/thumbs/720x1260/65/9c/e4dc63465b454a8f1df7c28bfcec9c65.jpg',
                fullName: 'Denis Fedorovich',
                status: 'old school songs',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 3,
                followed: false,
                photoUrl: 'https://img.tsn.ua/cached/1446819823/tsn-e7757395fe937525edc97f670924f9cf/thumbs/720x1260/65/9c/e4dc63465b454a8f1df7c28bfcec9c65.jpg',
                fullName: 'Shark Tururu',
                status: 'Little girl',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            }
        ])
    }

    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                                : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div> )
            }
        </div>
    )}

export default Users;