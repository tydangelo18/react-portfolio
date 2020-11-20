import React, { Component } from 'react';
import '../styles/About.css';
import Icons from '../components/Icons';
import Button from '../components/Button';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Backdrop from '../components/Backdrop';

class About extends Component {
  // Initial State
  state = {
    sideBarOpen: false,
  };
  // Change the state of sideBar
  sideBarClickHandler = () => {
    this.setState((prevState) => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };

  closesideBarClickHandler = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideBarOpen) {
      backdrop = <Backdrop click={this.closesideBarClickHandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <Header barClickHandler={this.sideBarClickHandler} />
        <SideBar show={this.state.sideBarOpen} />
        {backdrop}
        <header style={{ marginTop: '64px' }} className='showcase'>
          <h1>Ty D'Angelo</h1>
        </header>

        <header className='subTitle'>
          <h2>Full Stack Developer</h2>
        </header>

        <div id='content' className='container'>
          I am a full stack web developer that attended the University of Texas
          at Austin Coding Bootcamp. I have a background in accounting and
          financial reporting, and have developed skills in HTML, CSS,
          Javascript, JQuery, AJAX, Node,js, Express, MySql, MongoDB, Mongoose,
          React.js, Redux, Heroku, Git, and cross-browser responsive web design.
        </div>
        <Button />
        <Icons />
      </div>
    );
  }
}

export default About;
