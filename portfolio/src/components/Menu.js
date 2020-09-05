import React, { Component } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from './MenuContent';

class Menu extends Component {
    constructor(props) {
        super(props)
    
    this.state = {
        menuOpen: false,
    }
}

    openMenu() {
        this.state({ menuOpen: true })
    }

    closeMenu() {
        this.state({ menuOpen : false })
    }

    render() {
        return (
            <div className="Menu">
                <CheeseburgerMenu
                isOpen={this.state.menuOpen}
                closeCallback={this.closeMenu.bind(this)}>
                    <MenuContent closeCallback={this.closeMenu.bind(this)} />
                </CheeseburgerMenu>

                <HamburgerMenu
                isOpen={this.state.menuOpen}
                menuClicked={this.openMenu.bind(this)}
                width={32}
                height={24}
                strokeWidth={3}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
                />
            </div>
        )
    }
}

export default Menu;


