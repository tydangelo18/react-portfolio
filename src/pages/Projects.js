import React, { Component } from 'react';
import '../styles/Projects.css';
import ProjectCards from '../components/ProjectCards';
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <div>
      <section>
        <header>
          <Navbar />
        </header>
        <ProjectCards />
      </section>
    </div>
  );
};

export default Projects;
