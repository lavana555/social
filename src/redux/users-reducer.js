import {act} from "@testing-library/react";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET_USERS'
const SECOND_CURRENT_PAGE = 'SECOND_CURRENT_PAGE'
const CHANGE_FLAG = 'CHANGE_FLAG'


let intialState = {
    users: [
        // {id: 1, followed: false, name: 'valera', status: "best teacher", location: {city: 'Minsk', country: 'belarus'}},
        // {id: 2, followed: true, name: 'paul', status: "best friend", location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, followed: true, name: 'ira', status: "best girl", location: {city: 'warsawa', country: 'Poland'}},

    ],
    pageSize:100,
    totalUserCount:8,
    currentPage:1,
    flag:false
}


const UsersReducer = (state = intialState, action) => {

    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                totalUserCount: action.totalCount,
                users:  action.users
            }

        }
        case SECOND_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.newcurrentPage
            }

        }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }

                    return u
                })

            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case CHANGE_FLAG: {
            return {
                ...state,
                flag:action.flag
            }
        }
        default:
            return state
    }

}

export const onFollow = (userId) => ({type: FOLLOW, userId})
export const onUnFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users,totalCount) => ({type: GET_USERS, users,totalCount})
export const newSetPage = (newcurrentPage) => ({type: SECOND_CURRENT_PAGE, newcurrentPage})
export const changedPreloader = (flag) => ({type: CHANGE_FLAG, flag:flag})
export default UsersReducer;
