import React, { Component } from 'react';
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
                        <a href="/">
                            <img src={logo} width="50" height="50" alt="logo"></img>
                        </a></div>
                        <div className="spacer" />
                        <div className="header-navigation-items">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/about">About</a></li>
                            </ul>
                        </div>
                    </nav>
            </header>
        )
    }
}

export default Header;