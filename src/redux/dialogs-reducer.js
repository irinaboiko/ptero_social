const SEND_MASSAGE = 'SEND_MESSAGE';

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
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MASSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body, owner: 'user'}]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({
    type: SEND_MASSAGE,
    newMessageBody
})

export default dialogReducer;