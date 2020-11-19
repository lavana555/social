const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG'

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_DIALOG:
            let newDialog = {
                id: 6,
                message: state.newDialogPost
            }
            state.messagesDate.push(newDialog);
            state.newDialogPost = '';
            return state

        case UPDATE_NEW_DIALOG:
            state.newDialogPost = action.newDialog;
            return state
        default:
            return state
    }

}
export default messageReducer;



export const addDialogActionCreator = () => ({type: ADD_DIALOG})
export const updateNewDialogActionCreator = (newDialog) => ({type: UPDATE_NEW_DIALOG, newDialog: newDialog})