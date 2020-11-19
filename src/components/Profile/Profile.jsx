import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

import App from "../../App";

const Profile = (props) => {


    return (
        <div>
            <Profileinfo/>
            <MyPosts
                dispatch={props.dispatch}
                newPostText={props.newPostText}
                postsData={props.postsData}/>
        </div>
    )
}
export default Profile;
