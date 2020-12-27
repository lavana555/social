import React from "react";
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
// debugger
// console.log(props)
    return (
        <div>
            <Profileinfo userData={props.userData}/>
            <MyPostsContainer  />

        </div>
    )
}
export default Profile;
