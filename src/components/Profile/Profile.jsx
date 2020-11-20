import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

import App from "../../App";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {



    return (
        <div>
            <Profileinfo/>
            <MyPostsContainer
               // store={props.store}
                // dispatch={props.dispatch}
                //                newPostText={props.newPostText}
                //                postsData={props.postsData}
            />
            {/*<MyPosts*/}
            {/*    dispatch={props.dispatch}*/}
            {/*    newPostText={props.newPostText}*/}
            {/*    postsData={props.postsData}/>*/}
        </div>
    )
}
export default Profile;
