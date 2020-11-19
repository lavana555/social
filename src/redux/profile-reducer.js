const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'


const ProfileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:

            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 40
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
}




export default ProfileReducer


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (newMessage) => ({type: UPDATE_NEW_POST, newText: newMessage})