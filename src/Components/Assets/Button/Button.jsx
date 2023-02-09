import React from "react";
import './Button.css';

let Button = (props) =>{
    return <>
        <a className="button__main" href="#">
            {props.content}
        </a>
    </>
}

export default Button;
