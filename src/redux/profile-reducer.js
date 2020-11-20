const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'


let initialState = {

    postsData: [
        {id: 1, message: 'hi!how are you?jumping', likesCount: 15},
        {id: 2, message: 'What are you doing now', likesCount: 25},
        {id: 3, message: 'tel me please abot usseffect', likesCount: 35}
    ],
    newPostText: ''

}


const ProfileReducer = (state = initialState, action) => {

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
        default:
            return state;

    }
}


export default ProfileReducer


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (newMessage) => ({type: UPDATE_NEW_POST, newText: newMessage})