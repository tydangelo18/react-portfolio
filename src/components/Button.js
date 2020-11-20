import React, { Component } from 'react'
import '../styles/Button.css'
import resume from './Resume.pdf';

class Button extends Component {
    // Click Event
    resumeClick() {
        window.open( {resume} );
    }
    render() {
        return (
            <div className="Button">
                <div onClick={this.resumeClick} className="resumeBtn">
                    <a href= { resume } target= "null" className="btn">Resume</a>
                    
                </div>
            </div>
        )
    }
}

export default Button;