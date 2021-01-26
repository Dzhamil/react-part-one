import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    let posts = [
        {id: 23, message:'Hi, have are you?', likeCounts: 12},
        {id: 132323, message:'It\'s my first posts', likeCounts: 988 }
    ];

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;