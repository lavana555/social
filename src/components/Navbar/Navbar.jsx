import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "../Friends/Friend/Friend";

console.log(classes);


const Navbar = (props) => {
    // let friendElements = props.friendsDate.map((fr, index) => <Friend name={fr.name} key={index}/>)
    return (
        <div className={classes.nav}>
            <nav>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}> Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}> Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.active}> News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active}> Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.active}> Settings</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/friends" activeClassName={classes.active}> Friends</NavLink>
                </div>
                <div className={classes.nav_friends}>
                    {/*{friendElements}*/}
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
