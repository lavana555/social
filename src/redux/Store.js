import ProfileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import siteBarReducer from "./sutebar-reducer";


let store = {
    _state: {

        messagePage: {
            dialogDate: [
                {id: 1, name: 'ira'},
                {id: 2, name: 'roma'},
                {id: 3, name: 'paul'},
                {id: 4, name: 'nikita'},
                {id: 5, name: 'valera'},

            ],

            messagesDate: [
                {id: 1, message: 'hi paul!'},
                {id: 2, message: 'hi roma'},
                {id: 3, message: 'hi ira'},
                {id: 4, message: 'hi valera'},
                {id: 5, message: 'hi nikita'},
            ],
            newDialogPost: 'new diaolog post'
        },
        profilePage: {
            postsData: [
                {id: 1, message: 'hi!how are you?jumping', likesCount: 15},
                {id: 2, message: 'What are you doing now', likesCount: 25},
                {id: 3, message: 'tel me please abot usseffect', likesCount: 35}
            ],
            newPostText: ''
        },
        siteBar: {
            friendsDate: [
                {id: 1, name: 'ira'},
                {id: 2, name: 'paul'},
                {id: 3, name: 'valera'},

            ]
        }


    },

    callSubscriber() {
        console.log('state changed')
    },


    dispatch(action) {

        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._state.siteBar = siteBarReducer(this._state.siteBar, action)
        this.callSubscriber(this._state)

    },
    subscribe(observer) {
        return this.callSubscriber = observer
    },
    getState() {
        return this._state

    }


}


export default store;
window.store = store;



