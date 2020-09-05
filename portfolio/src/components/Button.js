import React, { Component } from 'react'
import '../styles/Button.css'
import { resume } from './Resume.pdf';

class Button extends Component {
    // Click Event
    resumeClick() {
        window.open( {resume} );
    }
    render() {
        return (
            <div className="Button">
                <button onClick={this.resumeClick} className="resumeBtn">
                    <a href= { resume } target="" className="btn">Resume</a>
                    {/**Once Resume is complete, link it to button */}
                </button>
            </div>
        )
    }
}

export default Button;