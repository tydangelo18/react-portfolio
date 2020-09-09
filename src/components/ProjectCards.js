import React, { Component } from 'react';
import '../styles/ProjectCards.css';
import { Link } from 'react-router-dom';
import password from '../utilities/password.jpg';
import planner from '../utilities/planner.jpg';
import springboard from '../utilities/springboard.jpg';
import readme from '../utilities/readme.jpg';
import burger from '../utilities/burger.jpg';
import filter from '../utilities/filter.jpg';


class ProjectCards extends Component {
    render() {
        return (
            <div className="ProjectCards">
                <div className="cardDiv">
                    <div className="topRow">
                        <div className="container" id="passwordCard">
                            <img src={password} alt="password" className="image"></img>
                            <div className="overlay">
                                <a href="https://github.com/tydangelo18/randompasswordgenerator" target="null"> 
                                    <div className="text">Password Generator</div>
                                </a>
                            </div>
                        </div>
                        <div className="container" id="plannerCard">
                            <img src={planner} alt="planner" className="image"></img>
                            <div className="overlay">
                                <a href="https://github.com/tydangelo18/dayplanner" target="null"> 
                                    <div className="text">Day Planner</div>
                                </a>
                            </div>
                        </div>
                        <div className="container" id="springboardCard">
                            <img src={springboard} alt="Springboard" className="image"></img>
                            <div className="overlay">
                                <a href="https://github.com/tydangelo18/springboard-app" target="null"> 
                                    <div className="text">Springboard</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bottomRow">
                        <div className="container" id="readmeCard">
                            <img src={readme} alt="Readme" className="image"></img>
                            <div className="overlay">
                                <a href="https://github.com/tydangelo18/readmegenerator" target="null"> 
                                    <div className="text">ReadMe Generator</div>
                                </a>
                            </div>
                        </div>
                        <div className="container" id="burgerCard">
                            <img src={burger} alt="Burger Logger" className="image"></img>
                            <div className="overlay">
                                <a href="https://github.com/tydangelo18/weloveburgers" target="null"> 
                                    <div className="text">Burger Logger</div>
                                </a>
                            </div>
                        </div>
                        <div className="container" id="filterCard">
                            <img src={filter} alt="React Filter Tool" className="image"></img>
                            <div className="overlay">
                                <a href="https://github.com/tydangelo18/employee-directory" target="null"> 
                                    <div className="text">React Filter Tool</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCards;