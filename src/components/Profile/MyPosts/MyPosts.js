import style from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
//  debugger
// console.log(props.userData)
    let messageElement = React.createRef()

    const addMessage = (e) => {
        props.onAddMessage()

    }
    let changeValue = (e) => {

        let newMessage = e.currentTarget.value
        props.onchangeValue(newMessage)
    }


    const postElements = props.postsData.map((p, index) => <Post
        key={index} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={style.postblock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <div>
                        <textarea ref={messageElement}
                                  onChange={changeValue}
                                  value={props.newPostText}
                        />
                    </div>
                    <div>
                        <button onClick={addMessage}>add</button>
                        <button>remove</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;
