import React from "react";
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Dialogs = (props) => {

    debugger

    let messagesElemenet = React.createRef()
    const addMessage = () => {
        props.onaddMessage()

    }
    let changeValue = (e) => {
        let newDialog = e.currentTarget.value
        props.onchangeValue(newDialog)
    }

    const dialogElements = props.dialogDate.map((el, index) => <Dialog
        name={el.name} id={el.id} key={index}/>)
    const messagesElemenets = props.messagesDate.map((m, index) => <Message
        id={m.id} message={m.message} key={index}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogElements}

            </div>
            <div className={style.messages}>
                {messagesElemenets}
                <textarea ref={messagesElemenet} onChange={changeValue} value={props.newDialogPost}/>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>


    )
}

export default Dialogs;


