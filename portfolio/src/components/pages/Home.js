import React, {Component} from "react";
import { Link } from 'react-router-dom';
import '../../styles/Home.css'
import logo from '../../components/logo.png';
import Icons from '../Icons'


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

            <Icons />
            
            </div>
        )
    }
}

export default Home;