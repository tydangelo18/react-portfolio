import React, {Component} from "react";
import '../styles/About.css'
import Icons from '../components/Icons'
import Button from "../components/Button";

class About extends Component {
    render() {
        return (
            <div>
                <header className="showcase">
                    <h1>Ty D'Angelo</h1>
                </header>
                
                <header className="subTitle">
                    <h2>Full Stack Developer</h2>
                </header>
  
                <div id="content" className="container">
                    I am a full stack web developer that attended the University of Texas at Austin Coding Bootcamp.
                    I have a background in accounting and financial reporting, and have developed skills in 
                    HTML, CSS, Javascript, JQuery, AJAX, Node,js, Express, MySql, MongoDB, Mongoose, React.js, Heroku,
                    Git, and cross-browser responsive web design. 
                </div>
                <Button />
                <Icons />
            </div>

            
        )
    }
}

export default About;