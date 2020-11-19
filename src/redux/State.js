// // import {rerenderEntireTree} from "../render";
//
// let rerenderEntireTree = () => {
//     console.log('state changed')
// }
//
//
// let state = {
//
//     messagePage: {
//         dialogDate: [
//             {id: 1, name: 'ira'},
//             {id: 2, name: 'roma'},
//             {id: 3, name: 'paul'},
//             {id: 4, name: 'nikita'},
//             {id: 5, name: 'valera'},
//
//         ]
//         ,
//
//         messagesDate: [
//             {id: 1, message: 'hi paul!'},
//             {id: 2, message: 'hi roma'},
//             {id: 3, message: 'hi ira'},
//             {id: 4, message: 'hi valera'},
//             {id: 5, message: 'hi nikita'},
//         ],
//         newDialogPost: 'new diaolog post'
//     }
//
//     ,
//     profilePage: {
//         postsData: [
//             {id: 1, message: 'hi!how are you?jumping', likesCount: 15},
//             {id: 2, message: 'What are you doing now', likesCount: 25},
//             {id: 3, message: 'tel me please abot usseffect', likesCount: 35}
//         ],
//         newPostText: ''
//     },
//     siteBar: {
//         friendsDate: [
//             {id: 1, name: 'ira'},
//             {id: 2, name: 'paul'},
//             {id: 3, name: 'valera'},
//
//         ]
//     }
//
//
// }
//
// window.state = state;
//
//
// export const addPost = () => {
//     let newPost = {
//         id: 4,
//         message: state.profilePage.newPostText,
//         likesCount: 40
//     }
//     state.profilePage.postsData.push(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
//
// }
// export const updateNewPost = (newPost) => {
//     state.profilePage.newPostText = newPost;
//     rerenderEntireTree(state)
// }
//
// export const addDialog = () => {
//     let newDialog = {
//         id: 6,
//         message: state.messagePage.newDialogPost
//     }
//     state.messagePage.messagesDate.push(newDialog);
//     state.messagePage.newDialogPost = '';
//     rerenderEntireTree(state)
// }
// export const updateNewDialog = (newDialog) => {
//     state.messagePage.newDialogPost = newDialog;
//     rerenderEntireTree(state)
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer
// }
//
// export default state;
