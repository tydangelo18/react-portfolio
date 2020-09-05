import React, {Component} from "react";
import '../styles/Projects.css'
import ProjectCards from '../components/ProjectCards'

class Projects extends Component {
    render() {
        return (
            <div>
        
                <ProjectCards />
                <ProjectCards />
            </div>
        )
    }
}

export default Projects;