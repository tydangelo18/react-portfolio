import React, { Component } from 'react';
import '../styles/MenuContent.css';
import PropTypes from 'prop-types';

class MenuContent extends Component {
    constructor(props) {
        super(props)

        this.items = []
        for (let i=1; i <=3; i++) {
            this.items.push(i)
        }
    }

    render() {
        return (
            <div className="menu">
                {this.items.map(i => <div className="menu-item" key={i}>
                <a
                href="https://github.com/tydangelo18"
                onClick={this.props.closeCallback}
                target="null">
                Menu item {i}
                </a>
            </div>)}

            <p className="hint">Click outside to close</p>
        </div>
        )
    }
}

MenuContent.propTypes = {
    closeCallback: PropTypes.func.isRequired
}

export default MenuContent;