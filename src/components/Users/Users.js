import React from 'react';
import User from "./User/User";
import {FollowActionCreator, UnFollowActionCreator} from "../../redux/users-reducer";


const Users = (props) => {
if (props.users.length===0) {
    props.setUsers([
        {id: 1, followed: false, name: 'valera', status: "best teacher", location: {city: 'Minsk', country: 'belarus'}},
        {id: 2, followed: true, name: 'paul', status: "best friend", location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: true, name: 'ira', status: "best girl", location: {city: 'warsawa', country: 'Poland'}},

    ])
}

    let Onfollow = (id) => {
        props.onFollow(id)
    }
    let OnUnfollow = (id) => {
        props.onUnFollow(id)
    }

    let userElements = props.users.map((u, index) => <User
        name={u.name}
        status={u.status}
        key={index}
        id={u.id}
        followed={u.followed}
        OnUnfollow={OnUnfollow}
        Onfollow={Onfollow}

    />)
    return (
        <div>
            {userElements}

        </div>
    );
};

export default Users;