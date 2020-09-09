import React, {Component} from "react";
import '../styles/Projects.css';
import ProjectCards from '../components/ProjectCards';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Backdrop from '../components/Backdrop';


class Projects extends Component {
    // Initial State
    state = {
        sideBarOpen: false
    };
    // Change the state of sideBar
    sideBarClickHandler = () => {
        this.setState((prevState) => {
            return {sideBarOpen: !prevState.sideBarOpen};
        });
    };

    closesideBarClickHandler = () => {
        this.setState({sideBarOpen: false});
    }

    render() {
        let backdrop;
        
        if (this.state.sideBarOpen) {
            backdrop = <Backdrop click={this.closesideBarClickHandler}/>
        }

        return (
            <div style={{height: '100%'}}>
                <Header barClickHandler={this.sideBarClickHandler} />
                <SideBar show={this.state.sideBarOpen} />
                {backdrop}
                <header style={{marginTop: '64px'}}></header>
                <ProjectCards />
            </div>
        )
    }
}

export default Projects;