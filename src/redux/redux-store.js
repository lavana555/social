import {combineReducers, createStore} from "redux";
import messageReducer from "./messages-reducer";
import ProfileReducer from "./profile-reducer";
import siteBarReducer from "./sutebar-reducer";
import UsersReducer from "./users-reducer";

let reducers=combineReducers({
    messagePage:messageReducer,
    profilePage:ProfileReducer,
    siteBar:siteBarReducer,
    users:UsersReducer,

})



let store=createStore(reducers);

window.store=store

export default store