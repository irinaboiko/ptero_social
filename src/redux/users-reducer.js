const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
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
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                } )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                } )
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users]  }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;