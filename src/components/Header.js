import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import SideBarButton from './SideBarButton';
import logo from '../components/logo.png'

class Header extends Component {
    render() {
        return (
            <header className="header">
                    <nav className="header-navigation">
                        <div className="header-button">
                            <SideBarButton click={this.props.barClickHandler} />
                        </div>
                        <div className="header-logo">
                        <Link to="/">
                            <img src={logo} width="50" height="50" alt="logo"></img>
                        </Link></div>
                        <div className="spacer" />
                        <div className="header-navigation-items">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </nav>
            </header>
        )
    }
}

export default Header;