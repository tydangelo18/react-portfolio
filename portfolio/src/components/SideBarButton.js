import React, {Component} from 'react';
import '../styles/SideBarButton.css'

class SideBarButton extends Component {
    render() {
        return(
            <button className="sidebarBtn" onClick={this.props.click}>
                <div className="button-line" />
                <div className="button-line" />
                <div className="button-line" />
            </button>
        )
    }
}

export default SideBarButton;
