import React, {Component} from 'react';
import '../styles/Backdrop.css';

class Backdrop extends Component {
    render() {
        return (
            <div className="backdrop" onClick={this.props.click} />
        )
    }
}

export default Backdrop;