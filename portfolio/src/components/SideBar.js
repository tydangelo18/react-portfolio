import React, {Component} from 'react';
import '../styles/SideBar.css';

class SideBar extends Component {
    render() {
        let sideBarClasses = 'side-bar';
        if (this.props.show) {
            sideBarClasses = 'side-bar open';
        }
        return (
            <nav className={sideBarClasses}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        )
    }
}

export default SideBar;
