import React from 'react';
import style from './Friend.module.css'
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div className={style.item}>
            <div className={style.item_logo}></div>
            <div className={style.item_name}>
            <NavLink to={`friend/${props.id}`} >{props.name}</NavLink>
        </div>
            </div>
    );
};

export default Friend;
