import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let  store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 4},
                {id: 2, message: 'It\'s my first post', likesCount: 25},
                {id: 3, message: 'This is the first day of my life', likesCount: 44},
                {id: 4, message: 'What\'s your number?', likesCount: 27}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ruru'},
                {id: 2, name: 'Shark'},
                {id: 3, name: 'Lucifer'},
                {id: 4, name: 'Fedorovich'},
                {id: 5, name: 'Kate'}
            ],
            messages: [
                {id: 1, message: 'Hi', owner: 'interlocutor'},
                {id: 2, message: 'How are you doing?', owner: 'user'},
                {id: 3, message: 'Do you have memes?', owner: 'interlocutor'}
            ],
            newMessageBody: ''
        },
        sidebar: {
            friendsList: [
                {id: 1, name: 'Aleksander'},
                {id: 2, name: 'Ta'},
                {id: 3, name: 'Veron'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;