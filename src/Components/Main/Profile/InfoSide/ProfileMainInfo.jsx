import React from "react";
import '../Profile.css';
import avatar from "../../../../img/avatar.jpg";

let ProfileMainInfo = (props) =>{
    return <>
        <div className="profile__header">
            <img className="avatar" src={props.photo ? props.photo : avatar} alt=""/>
            <h3 className="profile__name">{props.name}</h3>
        </div>
    </>
}

export default ProfileMainInfo;
