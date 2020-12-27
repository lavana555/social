import React from "react";
import Dialogs from "./Dialogs";
import MyContext from "../../StoreContext";
import {connect} from "react-redux";
import {onaddMessage} from "../../redux/messages-reducer";
import {onchangeValue} from "../../redux/messages-reducer";


// const DialogsContainer = (props) => {
//
//     return (
//         <MyContext.Consumer>
//             {
//                 (store) => {
//
//                     let state = store.getState()
//                     const onaddMessage = () => {
//                         store.dispatch(addDialogActionCreator())
//
//                     }
//                     let onchangeValue = (newDialog) => {
//                         store.dispatch(updateNewDialogActionCreator(newDialog))
//                     }
//
//                     return <Dialogs
//                         dialogDate={state.messagePage.dialogDate}
//                         messagesDate={state.messagePage.messagesDate}
//                         newDialogPost={state.messagePage.newDialogPost}
//                         onaddMessage={onaddMessage}
//                         onchangeValue={onchangeValue}/>
//
//                 }}
//         </MyContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogDate: state.messagePage.dialogDate,
        messagesDate: state.messagePage.messagesDate,
        newDialogPost: state.messagePage.newDialogPost
    }
}


const DialogsContainer = connect(mapStateToProps, {onaddMessage, onchangeValue})(Dialogs)


export default DialogsContainer;


