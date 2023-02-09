import React, {Component} from "react";
import './Sidebar.css';


class Sidebar extends Component{
    render() {
        return (
            <div className="sidebar">
                <nav>
                    <ul>
                        <li><a href="#">Main page</a></li>
                        <li><a href="#">Messages</a></li>
                        <li><a href="#">Friends</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Photos</a></li>
                        <li><a href="#">Calendar</a></li>

                    </ul>
                </nav>
            </div>
        )
    }
}
export default Sidebar;