import React from "react";
import '../Profile.css';


let AboutProfile = (props) => {
    return <>
        <div className="about-profile">
            <p>Profile Information:</p>
            <p>Age : {props.age ? props.age : "-"}</p>
            <p>Place of study : {props.study ? props.study : "-"}</p>
            <p>Place of work : {props.work ? props.work : "-"}</p>
        </div>
    </>
}

export default AboutProfile;
