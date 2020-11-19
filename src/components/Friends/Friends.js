import React from 'react';
import Friend from "./Friend/Friend";
import style from './Friends.module.css'

const Friends = (props) => {

    let friendsElements = props.friendsDate.map((fr, index) => <Friend name={fr.name} key={index} id={fr.id}/>)
    return (
        <div className={style.friend_wrapper}>
            Friends
            {friendsElements}
        </div>
    );
};

export default Friends;
