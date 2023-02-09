import React, {Component} from "react";
import './Footer.css';
import logo from "../../img/logo.png";

class Footer extends Component{
    render() {
        return (
          <footer>
              <img className="footer__logo" src={logo} alt=""/>
              <h2>My First Lesson</h2>
          </footer>
        )
    }
}
export default Footer;