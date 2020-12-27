const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const USER_DATA = 'USER_DATA'


let initialState = {

    postsData: [
        {id: 1, message: 'hi!how are you?jumping', likesCount: 15},
        {id: 2, message: 'What are you doing now', likesCount: 25},
        {id: 3, message: 'tel me please abot usseffect', likesCount: 35}
    ],
    newPostText: '',
    userData: [{ }]

}


const ProfileReducer = (state = initialState, action) => {
//debugger
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, {id: 4, message: state.newPostText}]
            }


        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case USER_DATA: {
            return {
                ...state,
                userData: action.userData
            }
        }
        default:
            return state;

    }
}


export default ProfileReducer


export const onAddMessage = () => ({type: ADD_POST})
export const onchangeValue = (newMessage) => ({type: UPDATE_NEW_POST, newText: newMessage})
export const getUserData = (userData) => ({type: USER_DATA, userData: userData})