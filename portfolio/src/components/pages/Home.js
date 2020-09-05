import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../../styles/Home.css'
import logo from '../../components/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mailto from "../Mailto";


class Home extends Component {
    render() {

        const btnStyle = {
            color: 'white',
            textDecoration: 'none'
        };

        return (
            <div className="Home">
                
                <header className="logo">
                    <img src={logo} width="150" height="150" alt="logo"></img>
                </header>

                <div className="projects"> 
                    <Link style={btnStyle} to='/projects'>             
                        <h1>Projects</h1>   
                    </Link>  
                </div>

                <div className="about">
                    <Link style={btnStyle} to='/about'>
                        <h1>About</h1>
                    </Link>
                </div>

                <div className="icons">
                    <Link style={btnStyle} to={{ pathname: "https://www.linkedin.com/in/tydangelo18/" }} target="null">
                        <FontAwesomeIcon className="linkedInBtn" icon={['fab', 'linkedin']} size= "2x" />
                    </Link>
                    <Link style={btnStyle} to={{ pathname: "https://github.com/tydangelo18" }} target="null">
                        <FontAwesomeIcon className="gitHubBtn" icon={['fab', 'github']} size="2x" />
                    </Link>
                    
                    <Mailto email="tydangelo18@gmail.com">
                        <FontAwesomeIcon style={btnStyle} className="emailBtn" icon="envelope" size="2x" />
                    </Mailto>
                </div>
            
            </div>
        )
    }
}

export default Home;