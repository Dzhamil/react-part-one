import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://bigpicture.ru/wp-content/uploads/2015/01/AUcommunes10.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;