import React from 'react';

// onFollow={props.onFollow}
// unFollow={props.unFollow}

const User = (props) => {
debugger


   let follow=()=>{
        props.OnUnfollow(props.id)
   }

    let unfollow=()=>{
        props.Onfollow(props.id)
    }

    debugger
    let buttonName=props.followed===false?'unfoolow':'follow'
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.status}</div>
            {props.followed?
                <button onClick={follow}>FOLLOW</button>
                :<button onClick={unfollow}>UNFOLLOW</button>
            }

        </div>
    );
};

export default User;