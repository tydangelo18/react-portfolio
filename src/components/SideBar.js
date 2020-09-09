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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        )
    }
}

export default SideBar;
