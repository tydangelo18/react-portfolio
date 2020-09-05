import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Mailto from '../components/Mailto';

class Icons extends Component {
    render() {

        const btnStyle = {
            color: 'white',
            textDecoration: 'none'
        };

        return (
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
        )
    }
}

export default Icons;