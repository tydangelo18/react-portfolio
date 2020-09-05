import React, { Component } from 'react'
import '../styles/Button.css'

class Button extends Component {
    render() {
        return (
            <div className="Button">
                <div className="resumeBtn">
                    <a href="" target="null" className="btn">Resume</a>
                    {/**Once Resume is complete, link it to button */}
                </div>
            </div>
        )
    }
}

export default Button;