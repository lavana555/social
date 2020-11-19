import React, {Component} from 'react';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import store from "./redux/Store";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar friendsDate={props.state.siteBar.friendsDate}/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <Dialogs
                    dialogState={props.state.messagePage.dialogDate}
                    messagesDate={props.state.messagePage.messagesDate}
                    newDialogPost={props.state.messagePage.newDialogPost}
                    dispatch={props.dispatch}
                />}/>
                <Route path="/profile" render={() => <Profile
                    dispatch={props.dispatch}
                    postsData={props.state.profilePage.postsData}
                    newPostText={props.state.profilePage.newPostText}
                />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/friends" render={() => < Friends friendsDate={props.state.siteBar.friendsDate}/>}/>
            </div>
        </div>
    );
}
export default App;
