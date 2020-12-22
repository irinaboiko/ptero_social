const SEND_MASSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MASSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body, owner: 'user'}]
            };
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        default:
            return state;
    }
}

export const sendMessage = () => ({
    type: SEND_MASSAGE
})

export const updateNewMessageBody = body => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default dialogReducer;