// import React, {Component} from 'react';
// import axios from "axios";
// import Users from "./Users";
//
// class UsersAPIComponent extends Component {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(responce => {
//                     let users = responce.data.items
//                     let totalCount = (responce.data.totalCount)
//                     this.props.setUsers(users, totalCount)
//                 }
//             )
//
//     }
//
//     Onfollow = (id) => {
//         this.props.onFollow(id)
//     }
//     OnUnfollow = (id) => {
//         this.props.onUnFollow(id)
//     }
//     secondPages = (pageNumber) => {
//         this.props.newSetPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//             .then(responce => {
//                     let users = responce.data.items
//                     let totalCount = (responce.data.totalCount)
//                     this.props.setUsers(users, totalCount)
//                 }
//             )
//     }
//
//     render() {
//
//         return (
//             <div>
//                 <Users totalUserCount={this.props.totalUserCount}
//                        OnUnfollow={this.props.OnUnfollow}
//                        Onfollow={this.props.Onfollow}
//                        pageSize={this.props.pageSize}
//                        currentPage={this.props.currentPage}
//                        secondPages={this.secondPages}
//                        users={this.props.users}
//                 />
//
//             </div>
//         );
//     }
// }
//
// export default UsersAPIComponent;