import React from "react";
import './Profile.css';
import AboutProfile from "./InfoSide/AboutProfile";
import ProfileMainInfo from "./InfoSide/ProfileMainInfo";
import photoURL from "../../../img/photo_2021-08-30_16-27-08.jpg";

let Profile = () =>{
    return <>
        <div className="profile-page">
            <ProfileMainInfo photo={photoURL} name={"Джафри Хусейн"}/>
            <AboutProfile age={24} work={"System engineer"} />
        </div>

    </>
}

export default Profile;
