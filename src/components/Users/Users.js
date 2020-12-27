import React from 'react';
import User from "./User/User";
import style from "./Users.module.css";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log('bla')
    let userElements = props.users.map((u, index) => <User
        name={u.name}
        status={u.status}
        key={index}
        photos={u.photos}
        id={u.id}
        followed={u.followed}
        OnUnfollow={props.OnUnfollow}
        Onfollow={props.Onfollow}
    />)


    return (
        <div>
            <div>
                {pages.map((p, index) => {
                    return <span
                        onClick={(e) => {
                            props.secondPages(p)
                        }}
                        className={props.currentPage === p && style.selectedPage} key={index}>{p}</span>
                })}
            </div>
            {userElements}
        </div>
    );
};

export default Users;