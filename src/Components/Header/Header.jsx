import React, {Component} from "react";
import './Header.css';
import logo from "../../img/logo.png";
import Button from "../Assets/Button/Button";

class Header extends Component{
    render() {
        return (
            <header >
                <div className="container">
                    <a href="#">  <img src={logo} className="header__logo" alt=""/></a>
                    <div className="nav__side">
                        <Button content={"Login"}/>
                        <Button content={"Registration"}/>
                    </div>
                </div>



            </header>
        )
    }
}
export default Header;