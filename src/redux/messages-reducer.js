const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_NEW_DIALOG = 'UPDATE-NEW-DIALOG'


let intialState = {

    dialogDate: [
        {id: 1, name: 'ira'},
        {id: 2, name: 'roma'},
        {id: 3, name: 'paul'},
        {id: 4, name: 'nikita'},
        {id: 5, name: 'valera'},

    ],

    messagesDate: [
        {id: 1, message: 'hi paul!!!!'},
        {id: 2, message: 'hi roma'},
        {id: 3, message: 'hi ira'},
        {id: 4, message: 'hi valera'},
        {id: 5, message: 'hi nikita'},
    ],
    newDialogPost: 'new diaolog post'

}

const messageReducer = (state = intialState, action) => {


    switch (action.type) {
        case ADD_DIALOG:
            let body = state.newDialogPost
            return {
                ...state,
                newDialogPost: '',
                messagesDate: [...state.messagesDate, {id: 6, message: body}]
            }

        case UPDATE_NEW_DIALOG: {
            return {
                ...state,
                newDialogPost: action.newDialog
            }

        }
        default:
            return state
    }

}
export default messageReducer;


export const onaddMessage = () => ({type: ADD_DIALOG})
export const onchangeValue = (newDialog) => ({type: UPDATE_NEW_DIALOG, newDialog: newDialog})