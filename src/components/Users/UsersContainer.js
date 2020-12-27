import React, {Component} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    changedPreloader,
    newSetPage,
    onFollow, onUnFollow, setUsers

} from "../../redux/users-reducer";
import axios from "axios";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.changedPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(responce => {
                    let users = responce.data.items
                    let totalCount = (responce.data.totalCount)
                    this.props.changedPreloader(false)
                    this.props.setUsers(users, totalCount)
                }
            )

    }

    Onfollow = (id) => {
        this.props.onFollow(id)
    }
    OnUnfollow = (id) => {
        this.props.onUnFollow(id)
    }
    secondPages = (pageNumber) => {
        this.props.newSetPage(pageNumber)
        this.props.changedPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(responce => {
                    let users = responce.data.items
                    let totalCount = (responce.data.totalCount)
                    this.props.changedPreloader(false)
                    this.props.setUsers(users, totalCount)
                }
            )
    }

    render() {

        return (
            <>
                {this.props.flag ? <Preloader/> : null}
                <div>
                    <Users totalUserCount={this.props.totalUserCount}
                           OnUnfollow={this.props.OnUnfollow}
                           Onfollow={this.props.Onfollow}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           secondPages={this.secondPages}
                           users={this.props.users}
                        // flag={this.props.flag}
                        // changedPreloader={this.props.changedPreloader}
                    />
                </div>
            </>

        );
    }
}


let mapStateToProps = (state) => {

    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage,
        flag: state.users.flag,
    }
}


export default connect(mapStateToProps, {
    onFollow,
    onUnFollow,
    setUsers,
    newSetPage,
    changedPreloader

})(UsersContainer);