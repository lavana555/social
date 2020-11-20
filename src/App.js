import React, {Component} from 'react';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Profile from "./components/Profile/Profile";

import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar  // friendsDate={state.siteBar.friendsDate}
            />
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer
                />}/>
                <Route path="/profile" render={() => <Profile
                />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" render={()=><UsersContainer/>}/>
                <Route path="/friends" render={() => < Friends
                    // friendsDate={state.siteBar.friendsDate}
                />}/>


            </div>
        </div>
    );
}
export default App;
