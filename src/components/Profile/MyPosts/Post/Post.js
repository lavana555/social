import React from "react";
import style from './Post.module.css';


const Post = (props) => {
   //debugger
    return (
        <div className={style.item}>
            <img
                src='https://png.pngtree.com/png-clipart/20190922/original/pngtree-business-male-user-avatar-vector-png-image_4774078.jpg'/>
            {props.message}

            <div>
                <span>like</span>
                <div>
                    {props.likeCount}
                </div>
            </div>
        </div>

    )
}

export default Post;
