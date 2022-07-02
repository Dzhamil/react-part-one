import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const ProfileContainer = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default ProfileContainer;