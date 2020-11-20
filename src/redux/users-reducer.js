const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET_USERS'


let intialState = {
    users: [
        // {id: 1, followed: false, name: 'valera', status: "best teacher", location: {city: 'Minsk', country: 'belarus'}},
        // {id: 2, followed: true, name: 'paul', status: "best friend", location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, followed: true, name: 'ira', status: "best girl", location: {city: 'warsawa', country: 'Poland'}},

    ]
}


const UsersReducer = (state = intialState, action) => {

    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
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
        default:
            return state
    }

}

export const FollowActionCreator = (userId) => ({type: FOLLOW, userId})
export const UnFollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const getUserAC = (users) => ({type: GET_USERS, users})
export default UsersReducer;
