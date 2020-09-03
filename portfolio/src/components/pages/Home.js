import React, {Component} from "react";
import '../../styles/Home.css'
import logo from '../../components/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Home extends Component {
    render() {
        return (
            <div className="Home">
                
                <header className="logo">
                    <img src={logo} width="150" height="150" alt="logo"></img>
                </header>

                <div className="projects">               
                    <h1>Projects</h1>    
                </div>

                <div className="about">
                    <h1>About</h1>
                </div>

                <div className="icons">
                    <FontAwesomeIcon className="linkedInBtn" icon={['fab', 'linkedin']} size= "2x" />
                    <FontAwesomeIcon className="gitHubBtn" icon={['fab', 'github']} size="2x" />
                    <FontAwesomeIcon className="emailBtn" icon="envelope" size="2x" />
                </div>
            
            </div>
        )
    }
}

export default Home;