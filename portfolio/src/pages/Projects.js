import React, {Component} from "react";
import '../styles/Projects.css'
import ProjectCards from '../components/ProjectCards'
import Menu from '../components/Menu';

class Projects extends Component {
    render() {
        return (
            <div>
                <Menu />
                <ProjectCards />
                <ProjectCards />
            </div>
        )
    }
}

export default Projects;