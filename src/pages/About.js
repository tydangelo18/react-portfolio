import React from 'react';
import '../styles/About.css';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <section>
        <header>
          <Navbar />
        </header>
        <div className='message'>
          <p >
            Developing the best contact methods for you to get in touch with me in progress...
            Sorry for the inconvenience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
