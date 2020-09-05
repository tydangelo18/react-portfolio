import React, { Component } from 'react';
import '../styles/ProjectCards.css';


class ProjectCards extends Component {
    render() {
        return (
            <div className="ProjectCards">
                <div className="cardContainer">
                {/**Images in Card and apply Overlay */}
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
        )
    }
}

export default ProjectCards;