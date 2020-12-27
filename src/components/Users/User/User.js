import React from 'react';
import {NavLink} from "react-router-dom";


const User = (props) => {

    let follow = () => {
        props.OnUnfollow(props.id)
    }

    let unfollow = () => {
        props.Onfollow(props.id)
    }

    // debugger
    let buttonName = props.followed === false ? 'unfoolow' : 'follow'
    let picture = 'https://www.meme-arsenal.com/memes/6e04ae9a90c6874a681e2c5d8cb5d046.jpg'
    return (
        <div>
            <NavLink to={`profile/${props.id}`}>
                <img src={props.photos.small != null ? props.photos.small : picture}/>
            </NavLink>
            <div>{props.name}</div>
            <div>{props.status}</div>
            {props.followed ?
                <button onClick={follow}>FOLLOW</button>
                : <button onClick={unfollow}>UNFOLLOW</button>
            }

        </div>
    );
};

export default User;