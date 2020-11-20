import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {FollowActionCreator, getUserAC, UnFollowActionCreator} from "../../redux/users-reducer";




let mapStateToProps=(state)=>{

    return {
        users:state.users.users
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        onFollow:(id)=>{dispatch(FollowActionCreator(id))},
        onUnFollow:(id)=>{dispatch(UnFollowActionCreator(id))},
        setUsers:(users)=>{dispatch(getUserAC(users))}
    }
}


let UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)


export default UsersContainer;