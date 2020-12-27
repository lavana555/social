import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {onAddMessage} from "../../../redux/profile-reducer";
import {onchangeValue} from "../../../redux/messages-reducer";


//
// const MyPostsContainer = () => {
//
//     return (
//         // <div>
//         <MyContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState()
//                     const onAddMessage = (e) => {
//                         store.dispatch(addPostActionCreator())
//
//                     }
//                     let onchangeValue = (newMessage) => {
//
//                         store.dispatch(updateNewPostActionCreator(newMessage))
//
//                     }
//                     return <MyPosts onAddMessage={onAddMessage}
//                                     onchangeValue={onchangeValue}
//                                     postsData={state.profilePage.postsData}
//                                     newPostText={state.profilePage.newPostText}/>
//                 }}
//         </MyContext.Consumer>
//         // </div>
//
//     )
// }

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        userData: state.profilePage.userData,

    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAddMessage: () => {
//             dispatch(addPostActionCreator())
//         },
//         onchangeValue: (newMessage) => {
//             dispatch(updateNewPostActionCreator(newMessage))
//         }
//     }
// }


const MyPostsContainer = connect(mapStateToProps, {onAddMessage, onchangeValue})(MyPosts)


export default MyPostsContainer;
