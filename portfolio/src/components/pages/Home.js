import React, {Component} from "react";
import '../../styles/Home.css'
import logo from '../../components/logo.png';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                
                <header id="logo">
                    
                        <img src={logo} width="150" height="150" alt="logo"></img>
                    
                </header>


                <div id="projects">
                       
                        <h1>Projects</h1>
                    
                </div>

                <div id="about">
                        
                        <h1>About</h1>
                    
                </div>


                <div id="icons">
                    
                        
                </div>
            </div>
        )
    }
}

export default Home;