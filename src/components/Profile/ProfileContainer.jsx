import React,{Component} from "react";
import axios from "axios";
import Profile from "./Profile";
import {getUserData} from "../../redux/profile-reducer";
import {connect} from "react-redux";


class ProfileContainer extends Component {

    componentDidMount() {
       // debugger
        let userId=5741
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)

            .then(response => {
              //  debugger
                console.log('data:',response.data)
                let userData = response.data

                this.props.getUserData(userData)
            })
    }



    render() {
        return (
            <div>
                <Profile
                    {...this.props}
                    userData={this.props.userData}
                />
            </div>
        );
    }
}
let mapStateToProps=(state)=>({

        userData:state.profilePage.userData
    }
)

export default connect(mapStateToProps, {getUserData})(ProfileContainer);